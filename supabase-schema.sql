-- =====================================================
-- SUPABASE SCHEMA FOR BOOK CLUB APPLICATION
-- =====================================================
-- This schema includes all tables, relationships, indexes,
-- Row Level Security (RLS) policies, and triggers
-- =====================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. PROFILES TABLE
-- =====================================================
-- Stores user profile information
-- Links to Supabase auth.users table via id
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT DEFAULT 'member' CHECK (role IN ('admin', 'moderator', 'member')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Add comment to table
COMMENT ON TABLE profiles IS 'User profiles with roles and avatar';
COMMENT ON COLUMN profiles.id IS 'References auth.users(id)';
COMMENT ON COLUMN profiles.role IS 'User role: admin, moderator, or member';

-- Create index on role for faster filtering
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);

-- =====================================================
-- 2. BOOKS TABLE
-- =====================================================
-- Stores book information with metadata
CREATE TABLE IF NOT EXISTS books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  cover_url TEXT,
  summary TEXT,
  tags TEXT[] DEFAULT '{}',
  isbn TEXT,
  published_year INTEGER,
  page_count INTEGER,
  created_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Constraints
  CONSTRAINT title_not_empty CHECK (LENGTH(TRIM(title)) > 0),
  CONSTRAINT author_not_empty CHECK (LENGTH(TRIM(author)) > 0)
);

-- Add comments
COMMENT ON TABLE books IS 'Books in the book club';
COMMENT ON COLUMN books.tags IS 'Array of tags/categories for the book';
COMMENT ON COLUMN books.created_by IS 'User who added this book';

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_books_created_at ON books(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_books_created_by ON books(created_by);
CREATE INDEX IF NOT EXISTS idx_books_title ON books(title);
CREATE INDEX IF NOT EXISTS idx_books_author ON books(author);

-- GIN index for tags array search
CREATE INDEX IF NOT EXISTS idx_books_tags ON books USING GIN(tags);

-- Full text search index (optional but recommended)
CREATE INDEX IF NOT EXISTS idx_books_search ON books
  USING GIN(to_tsvector('english', title || ' ' || author || ' ' || COALESCE(summary, '')));

-- =====================================================
-- 3. COMMENTS TABLE
-- =====================================================
-- Stores user comments on books
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  created_by UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Constraints
  CONSTRAINT body_not_empty CHECK (LENGTH(TRIM(body)) > 0)
);

-- Add comments
COMMENT ON TABLE comments IS 'User comments on books';
COMMENT ON COLUMN comments.book_id IS 'The book this comment is about';
COMMENT ON COLUMN comments.created_by IS 'User who wrote this comment';

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_comments_book_id ON comments(book_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_by ON comments(created_by);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- Composite index for fetching comments for a specific book
CREATE INDEX IF NOT EXISTS idx_comments_book_created ON comments(book_id, created_at DESC);

-- =====================================================
-- 4. LIKES TABLE (OPTIONAL)
-- =====================================================
-- Stores user likes/favorites for books
CREATE TABLE IF NOT EXISTS likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Ensure a user can only like a book once
  CONSTRAINT unique_user_book_like UNIQUE(book_id, user_id)
);

-- Add comments
COMMENT ON TABLE likes IS 'User likes/favorites for books';
COMMENT ON COLUMN likes.user_id IS 'User who liked the book';

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_likes_book_id ON likes(book_id);
CREATE INDEX IF NOT EXISTS idx_likes_user_id ON likes(user_id);
CREATE INDEX IF NOT EXISTS idx_likes_created_at ON likes(created_at DESC);

-- =====================================================
-- 5. READING_STATUS TABLE (BONUS)
-- =====================================================
-- Track which books users are reading, want to read, or have finished
CREATE TABLE IF NOT EXISTS reading_status (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('want_to_read', 'reading', 'finished')),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  started_at TIMESTAMPTZ,
  finished_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Ensure a user can only have one status per book
  CONSTRAINT unique_user_book_status UNIQUE(book_id, user_id)
);

-- Add comments
COMMENT ON TABLE reading_status IS 'Track reading progress and status for each user';
COMMENT ON COLUMN reading_status.status IS 'Reading status: want_to_read, reading, or finished';
COMMENT ON COLUMN reading_status.rating IS 'User rating (1-5 stars), only for finished books';

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_reading_status_book_id ON reading_status(book_id);
CREATE INDEX IF NOT EXISTS idx_reading_status_user_id ON reading_status(user_id);
CREATE INDEX IF NOT EXISTS idx_reading_status_status ON reading_status(status);

-- =====================================================
-- 6. TRIGGERS FOR UPDATED_AT
-- =====================================================
-- Automatically update updated_at timestamp on row updates

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers to all tables with updated_at
-- Drop existing triggers first to allow re-running this script
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_books_updated_at ON books;
CREATE TRIGGER update_books_updated_at
  BEFORE UPDATE ON books
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_comments_updated_at ON comments;
CREATE TRIGGER update_comments_updated_at
  BEFORE UPDATE ON comments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_reading_status_updated_at ON reading_status;
CREATE TRIGGER update_reading_status_updated_at
  BEFORE UPDATE ON reading_status
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_status ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- PROFILES POLICIES
-- =====================================================

-- Allow users to view all profiles
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON profiles;
CREATE POLICY "Profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

-- Allow users to update their own profile
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Allow users to insert their own profile
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
CREATE POLICY "Users can insert their own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- =====================================================
-- BOOKS POLICIES
-- =====================================================

-- Allow everyone to view books
DROP POLICY IF EXISTS "Books are viewable by everyone" ON books;
CREATE POLICY "Books are viewable by everyone"
  ON books FOR SELECT
  USING (true);

-- Allow authenticated users to insert books
DROP POLICY IF EXISTS "Authenticated users can create books" ON books;
CREATE POLICY "Authenticated users can create books"
  ON books FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

-- Allow users to update their own books
DROP POLICY IF EXISTS "Users can update their own books" ON books;
CREATE POLICY "Users can update their own books"
  ON books FOR UPDATE
  USING (auth.uid() = created_by);

-- Allow users to delete their own books (or admins)
DROP POLICY IF EXISTS "Users can delete their own books" ON books;
CREATE POLICY "Users can delete their own books"
  ON books FOR DELETE
  USING (
    auth.uid() = created_by
    OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- COMMENTS POLICIES
-- =====================================================

-- Allow everyone to view comments
DROP POLICY IF EXISTS "Comments are viewable by everyone" ON comments;
CREATE POLICY "Comments are viewable by everyone"
  ON comments FOR SELECT
  USING (true);

-- Allow authenticated users to insert comments
DROP POLICY IF EXISTS "Authenticated users can create comments" ON comments;
CREATE POLICY "Authenticated users can create comments"
  ON comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

-- Allow users to update their own comments
DROP POLICY IF EXISTS "Users can update their own comments" ON comments;
CREATE POLICY "Users can update their own comments"
  ON comments FOR UPDATE
  USING (auth.uid() = created_by);

-- Allow users to delete their own comments (or admins/moderators)
DROP POLICY IF EXISTS "Users can delete their own comments" ON comments;
CREATE POLICY "Users can delete their own comments"
  ON comments FOR DELETE
  USING (
    auth.uid() = created_by
    OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('admin', 'moderator')
    )
  );

-- =====================================================
-- LIKES POLICIES
-- =====================================================

-- Allow everyone to view likes
DROP POLICY IF EXISTS "Likes are viewable by everyone" ON likes;
CREATE POLICY "Likes are viewable by everyone"
  ON likes FOR SELECT
  USING (true);

-- Allow authenticated users to insert likes
DROP POLICY IF EXISTS "Authenticated users can like books" ON likes;
CREATE POLICY "Authenticated users can like books"
  ON likes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own likes
DROP POLICY IF EXISTS "Users can delete their own likes" ON likes;
CREATE POLICY "Users can delete their own likes"
  ON likes FOR DELETE
  USING (auth.uid() = user_id);

-- =====================================================
-- READING_STATUS POLICIES
-- =====================================================

-- Allow everyone to view reading statuses
DROP POLICY IF EXISTS "Reading statuses are viewable by everyone" ON reading_status;
CREATE POLICY "Reading statuses are viewable by everyone"
  ON reading_status FOR SELECT
  USING (true);

-- Allow authenticated users to insert their own reading status
DROP POLICY IF EXISTS "Authenticated users can create reading status" ON reading_status;
CREATE POLICY "Authenticated users can create reading status"
  ON reading_status FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own reading status
DROP POLICY IF EXISTS "Users can update their own reading status" ON reading_status;
CREATE POLICY "Users can update their own reading status"
  ON reading_status FOR UPDATE
  USING (auth.uid() = user_id);

-- Allow users to delete their own reading status
DROP POLICY IF EXISTS "Users can delete their own reading status" ON reading_status;
CREATE POLICY "Users can delete their own reading status"
  ON reading_status FOR DELETE
  USING (auth.uid() = user_id);

-- =====================================================
-- 8. HELPFUL VIEWS
-- =====================================================

-- View to get books with like count and comment count
CREATE OR REPLACE VIEW books_with_stats AS
SELECT
  b.*,
  COUNT(DISTINCT l.id) AS like_count,
  COUNT(DISTINCT c.id) AS comment_count,
  p.name AS creator_name,
  p.avatar_url AS creator_avatar
FROM books b
LEFT JOIN likes l ON b.id = l.book_id
LEFT JOIN comments c ON b.id = c.book_id
LEFT JOIN profiles p ON b.created_by = p.id
GROUP BY b.id, p.name, p.avatar_url;

-- View to get comments with user info
CREATE OR REPLACE VIEW comments_with_user AS
SELECT
  c.*,
  p.name AS user_name,
  p.avatar_url AS user_avatar,
  p.role AS user_role
FROM comments c
JOIN profiles p ON c.created_by = p.id;

-- =====================================================
-- 9. USEFUL FUNCTIONS
-- =====================================================

-- Function to get books a user has liked
CREATE OR REPLACE FUNCTION get_user_liked_books(user_uuid UUID)
RETURNS TABLE (
  id UUID,
  title TEXT,
  author TEXT,
  cover_url TEXT,
  liked_at TIMESTAMPTZ
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    b.id,
    b.title,
    b.author,
    b.cover_url,
    l.created_at AS liked_at
  FROM books b
  JOIN likes l ON b.id = l.book_id
  WHERE l.user_id = user_uuid
  ORDER BY l.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- Function to get popular books (most liked)
CREATE OR REPLACE FUNCTION get_popular_books(limit_count INTEGER DEFAULT 10)
RETURNS TABLE (
  id UUID,
  title TEXT,
  author TEXT,
  cover_url TEXT,
  like_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    b.id,
    b.title,
    b.author,
    b.cover_url,
    COUNT(l.id) AS like_count
  FROM books b
  LEFT JOIN likes l ON b.id = l.book_id
  GROUP BY b.id
  ORDER BY like_count DESC, b.created_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 10. AUTOMATIC PROFILE CREATION
-- =====================================================
-- This trigger automatically creates a profile when a user signs up
-- You won't need to manually create profiles in your code!

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, avatar_url, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url',
    'member'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to run after a new user is created in auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

COMMENT ON FUNCTION public.handle_new_user IS 'Automatically creates a profile when a new user signs up';

-- =====================================================
-- 11. SEED DATA (OPTIONAL - COMMENT OUT IF NOT NEEDED)
-- =====================================================

-- You can add sample data here after setting up auth users
-- Example:
/*
INSERT INTO books (title, author, cover_url, summary, tags, created_by) VALUES
  ('The Great Gatsby', 'F. Scott Fitzgerald', 'https://example.com/gatsby.jpg',
   'A story of decadence and excess...', ARRAY['classic', 'fiction'],
   'YOUR_USER_ID_HERE'),
  ('1984', 'George Orwell', 'https://example.com/1984.jpg',
   'A dystopian social science fiction...', ARRAY['dystopian', 'classic'],
   'YOUR_USER_ID_HERE');
*/

-- =====================================================
-- SCHEMA COMPLETE
-- =====================================================
-- To apply this schema:
-- 1. Go to Supabase Dashboard > SQL Editor
-- 2. Create a new query
-- 3. Paste this entire file
-- 4. Click "Run"
--
-- After running this schema:
-- - Profiles will be created AUTOMATICALLY when users sign up
-- - No manual profile creation needed in your code
-- - Users can immediately create books, comments, and likes
-- =====================================================
