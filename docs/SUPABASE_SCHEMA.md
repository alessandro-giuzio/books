# Supabase Database Schema Documentation

## Overview

This document describes the complete database schema for the Book Club application.

## 📊 Table Relationships

```
auth.users (Supabase Auth)
    ↓
profiles (1:1)
    ↓
    ├── books (1:many) ← created_by
    ├── comments (1:many) ← created_by
    ├── likes (1:many) ← user_id
    └── reading_status (1:many) ← user_id

books
    ├── comments (1:many) ← book_id
    ├── likes (1:many) ← book_id
    └── reading_status (1:many) ← book_id
```

## 📋 Tables

### 1. `profiles`

Extends Supabase Auth users with additional profile information.

| Column       | Type        | Constraints                      | Description                                  |
| ------------ | ----------- | -------------------------------- | -------------------------------------------- |
| `id`         | UUID        | PRIMARY KEY, FK → auth.users(id) | User ID from Supabase Auth                   |
| `name`       | TEXT        | NOT NULL                         | User's display name                          |
| `avatar_url` | TEXT        | NULLABLE                         | URL to user's avatar image                   |
| `role`       | TEXT        | DEFAULT 'member', CHECK          | User role: 'admin', 'moderator', or 'member' |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW()                    | When profile was created                     |
| `updated_at` | TIMESTAMPTZ | DEFAULT NOW()                    | Last update timestamp                        |

**Indexes:**

- `idx_profiles_role` on `role`

**Relationships:**

- `id` → `auth.users(id)` ON DELETE CASCADE

**RLS Policies:**

- ✅ SELECT: Everyone can view all profiles
- ✅ INSERT: Users can create their own profile
- ✅ UPDATE: Users can update only their own profile

---

### 2. `books`

Stores information about books in the book club.

| Column           | Type        | Constraints                             | Description              |
| ---------------- | ----------- | --------------------------------------- | ------------------------ |
| `id`             | UUID        | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique book identifier   |
| `title`          | TEXT        | NOT NULL, CHECK (not empty)             | Book title               |
| `author`         | TEXT        | NOT NULL, CHECK (not empty)             | Book author              |
| `cover_url`      | TEXT        | NULLABLE                                | URL to book cover image  |
| `summary`        | TEXT        | NULLABLE                                | Book summary/description |
| `tags`           | TEXT[]      | DEFAULT '{}'                            | Array of tags/categories |
| `isbn`           | TEXT        | NULLABLE                                | ISBN number              |
| `published_year` | INTEGER     | NULLABLE                                | Year book was published  |
| `page_count`     | INTEGER     | NULLABLE                                | Number of pages          |
| `created_by`     | UUID        | NOT NULL, FK → profiles(id)             | User who added the book  |
| `created_at`     | TIMESTAMPTZ | DEFAULT NOW()                           | When book was added      |
| `updated_at`     | TIMESTAMPTZ | DEFAULT NOW()                           | Last update timestamp    |

**Indexes:**

- `idx_books_created_at` on `created_at DESC` (for sorting recent books)
- `idx_books_created_by` on `created_by`
- `idx_books_title` on `title`
- `idx_books_author` on `author`
- `idx_books_tags` (GIN) for array search
- `idx_books_search` (GIN) for full-text search

**Relationships:**

- `created_by` → `profiles(id)` ON DELETE CASCADE

**RLS Policies:**

- ✅ SELECT: Everyone can view all books
- ✅ INSERT: Authenticated users can create books
- ✅ UPDATE: Users can update their own books
- ✅ DELETE: Users can delete their own books, or admins can delete any book

---

### 3. `comments`

User comments on books.

| Column       | Type        | Constraints                             | Description               |
| ------------ | ----------- | --------------------------------------- | ------------------------- |
| `id`         | UUID        | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique comment identifier |
| `book_id`    | UUID        | NOT NULL, FK → books(id)                | Book being commented on   |
| `body`       | TEXT        | NOT NULL, CHECK (not empty)             | Comment text              |
| `created_by` | UUID        | NOT NULL, FK → profiles(id)             | User who wrote comment    |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW()                           | When comment was created  |
| `updated_at` | TIMESTAMPTZ | DEFAULT NOW()                           | Last update timestamp     |

**Indexes:**

- `idx_comments_book_id` on `book_id`
- `idx_comments_created_by` on `created_by`
- `idx_comments_created_at` on `created_at DESC`
- `idx_comments_book_created` composite on `(book_id, created_at DESC)`

**Relationships:**

- `book_id` → `books(id)` ON DELETE CASCADE
- `created_by` → `profiles(id)` ON DELETE CASCADE

**RLS Policies:**

- ✅ SELECT: Everyone can view all comments
- ✅ INSERT: Authenticated users can create comments
- ✅ UPDATE: Users can update their own comments
- ✅ DELETE: Users can delete their own comments, or admins/moderators can delete any comment

---

### 4. `likes`

User likes/favorites for books.

| Column       | Type        | Constraints                             | Description             |
| ------------ | ----------- | --------------------------------------- | ----------------------- |
| `id`         | UUID        | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique like identifier  |
| `book_id`    | UUID        | NOT NULL, FK → books(id)                | Book being liked        |
| `user_id`    | UUID        | NOT NULL, FK → profiles(id)             | User who liked the book |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW()                           | When like was created   |

**Constraints:**

- `UNIQUE(book_id, user_id)` - A user can only like a book once

**Indexes:**

- `idx_likes_book_id` on `book_id`
- `idx_likes_user_id` on `user_id`
- `idx_likes_created_at` on `created_at DESC`

**Relationships:**

- `book_id` → `books(id)` ON DELETE CASCADE
- `user_id` → `profiles(id)` ON DELETE CASCADE

**RLS Policies:**

- ✅ SELECT: Everyone can view all likes
- ✅ INSERT: Authenticated users can like books
- ✅ DELETE: Users can delete their own likes

---

### 5. `reading_status` (BONUS)

Track which books users are reading, want to read, or have finished.

| Column        | Type        | Constraints                                   | Description                |
| ------------- | ----------- | --------------------------------------------- | -------------------------- |
| `id`          | UUID        | PRIMARY KEY, DEFAULT uuid_generate_v4()       | Unique status identifier   |
| `book_id`     | UUID        | NOT NULL, FK → books(id)                      | Book being tracked         |
| `user_id`     | UUID        | NOT NULL, FK → profiles(id)                   | User tracking the book     |
| `status`      | TEXT        | CHECK ('want_to_read', 'reading', 'finished') | Current status             |
| `rating`      | INTEGER     | CHECK (1-5), NULLABLE                         | User rating (1-5 stars)    |
| `started_at`  | TIMESTAMPTZ | NULLABLE                                      | When user started reading  |
| `finished_at` | TIMESTAMPTZ | NULLABLE                                      | When user finished reading |
| `created_at`  | TIMESTAMPTZ | DEFAULT NOW()                                 | When status was created    |
| `updated_at`  | TIMESTAMPTZ | DEFAULT NOW()                                 | Last update timestamp      |

**Constraints:**

- `UNIQUE(book_id, user_id)` - A user can only have one status per book

**Indexes:**

- `idx_reading_status_book_id` on `book_id`
- `idx_reading_status_user_id` on `user_id`
- `idx_reading_status_status` on `status`

**Relationships:**

- `book_id` → `books(id)` ON DELETE CASCADE
- `user_id` → `profiles(id)` ON DELETE CASCADE

**RLS Policies:**

- ✅ SELECT: Everyone can view all reading statuses
- ✅ INSERT: Authenticated users can create their own reading status
- ✅ UPDATE: Users can update their own reading status
- ✅ DELETE: Users can delete their own reading status

---

## 🔍 Views

### `books_with_stats`

Provides books with aggregated statistics.

**Columns:**

- All columns from `books`
- `like_count` - Number of likes
- `comment_count` - Number of comments
- `creator_name` - Name of user who created the book
- `creator_avatar` - Avatar of user who created the book

**Usage:**

```sql
SELECT * FROM books_with_stats ORDER BY like_count DESC LIMIT 10;
```

### `comments_with_user`

Provides comments with user information.

**Columns:**

- All columns from `comments`
- `user_name` - Name of commenter
- `user_avatar` - Avatar of commenter
- `user_role` - Role of commenter

**Usage:**

```sql
SELECT * FROM comments_with_user WHERE book_id = 'some-uuid';
```

---

## 🔧 Functions

### `get_user_liked_books(user_uuid UUID)`

Returns all books a user has liked.

**Returns:**

- `id` - Book ID
- `title` - Book title
- `author` - Book author
- `cover_url` - Book cover URL
- `liked_at` - When the book was liked

**Usage:**

```sql
SELECT * FROM get_user_liked_books('user-uuid-here');
```

### `get_popular_books(limit_count INTEGER DEFAULT 10)`

Returns the most popular books (by like count).

**Returns:**

- `id` - Book ID
- `title` - Book title
- `author` - Book author
- `cover_url` - Book cover URL
- `like_count` - Number of likes

**Usage:**

```sql
SELECT * FROM get_popular_books(5);
```

---

## 🚀 Setup Instructions

1. **Go to Supabase Dashboard**
   - Navigate to your project
   - Click on "SQL Editor" in the sidebar

2. **Create New Query**
   - Click "New query"

3. **Paste and Run**
   - Copy the contents of `supabase-schema.sql`
   - Paste into the SQL editor
   - Click "Run" or press Ctrl+Enter

4. **Verify Tables**
   - Go to "Table Editor" in the sidebar
   - You should see all 5 tables created

5. **Set up Auth**
   - Enable your preferred auth providers in Authentication > Providers
   - When users sign up, create their profile:

```javascript
// After user signs up
const {
  data: { user },
} = await supabase.auth.getUser();

await supabase.from('profiles').insert({
  id: user.id,
  name: user.user_metadata.full_name || user.email,
  avatar_url: user.user_metadata.avatar_url,
});
```

---

## 📝 Common Queries

### Get all books with stats

```javascript
const { data, error } = await supabase
  .from('books_with_stats')
  .select('*')
  .order('created_at', { ascending: false });
```

### Get book with comments

```javascript
const { data, error } = await supabase
  .from('books')
  .select(
    `
    *,
    comments:comments_with_user(*)
  `,
  )
  .eq('id', bookId)
  .single();
```

### Add a book

```javascript
const { data, error } = await supabase
  .from('books')
  .insert({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    summary: 'A classic American novel...',
    tags: ['classic', 'fiction'],
    created_by: user.id,
  })
  .select()
  .single();
```

### Like a book

```javascript
const { data, error } = await supabase.from('likes').insert({
  book_id: bookId,
  user_id: user.id,
});
```

### Unlike a book

```javascript
const { data, error } = await supabase
  .from('likes')
  .delete()
  .eq('book_id', bookId)
  .eq('user_id', user.id);
```

### Add a comment

```javascript
const { data, error } = await supabase
  .from('comments')
  .insert({
    book_id: bookId,
    body: 'Great book!',
    created_by: user.id,
  })
  .select()
  .single();
```

### Update reading status

```javascript
const { data, error } = await supabase
  .from('reading_status')
  .upsert({
    book_id: bookId,
    user_id: user.id,
    status: 'reading',
    started_at: new Date().toISOString(),
  })
  .select()
  .single();
```

### Mark book as finished with rating

```javascript
const { data, error } = await supabase
  .from('reading_status')
  .update({
    status: 'finished',
    rating: 5,
    finished_at: new Date().toISOString(),
  })
  .eq('book_id', bookId)
  .eq('user_id', user.id);
```

---

## 🔒 Security Notes

1. **Row Level Security (RLS)** is enabled on all tables
2. Users can only modify their own data (except admins)
3. All tables cascade delete when related records are deleted
4. Foreign key constraints ensure data integrity
5. Check constraints prevent invalid data

---

## 🎨 Optional Enhancements

### Add book categories table

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE book_categories (
  book_id UUID REFERENCES books(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (book_id, category_id)
);
```

### Add book reviews (separate from comments)

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(book_id, user_id)
);
```

---

## 📊 Entity Relationship Diagram

```
┌─────────────────┐
│  auth.users     │ (Supabase Auth)
└────────┬────────┘
         │
         │ 1:1
         ▼
┌─────────────────┐
│   profiles      │
│─────────────────│
│ id (PK, FK)     │◄─────────┐
│ name            │          │
│ avatar_url      │          │
│ role            │          │
└────────┬────────┘          │
         │                   │
         │ 1:many            │ created_by
         │                   │
    ┌────┴────┬──────────┬───┴──────┐
    ▼         ▼          ▼          ▼
┌────────┐ ┌──────────┐ ┌────────┐ ┌─────────────────┐
│ books  │ │ comments │ │ likes  │ │ reading_status  │
│────────│ │──────────│ │────────│ │─────────────────│
│ id (PK)│ │ id (PK)  │ │ id (PK)│ │ id (PK)         │
└───┬────┘ └────┬─────┘ └───┬────┘ └────┬────────────┘
    │           │            │           │
    │ book_id   │ book_id    │ book_id   │ book_id
    └───────────┴────────────┴───────────┘
```

---

## 🛠️ Maintenance

### Backup Strategy

- Supabase automatically backs up your database
- For manual backups: Dashboard > Database > Backups

### Monitoring

- Check Dashboard > Database > Logs for errors
- Monitor table sizes in Database > Tables

### Migrations

- When updating schema, use migrations:
  ```bash
  supabase migration new update_name
  ```

---

## 📞 Support

For issues with:

- **Supabase**: https://supabase.com/docs
- **RLS Policies**: https://supabase.com/docs/guides/auth/row-level-security
- **PostgreSQL**: https://www.postgresql.org/docs/

---

**Last Updated:** January 25, 2026
