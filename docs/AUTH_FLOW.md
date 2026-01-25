# Authentication & User Flow Guide

## 🔐 How Authentication Works

With the schema we created, here's how user authentication and registration works:

## 📊 Two-Table System

```
┌─────────────────────┐         ┌─────────────────────┐
│   auth.users        │  1:1    │    profiles         │
│  (Supabase Auth)    │◄───────►│  (Your App Data)    │
├─────────────────────┤         ├─────────────────────┤
│ id (UUID)           │         │ id (FK)             │
│ email               │         │ name                │
│ encrypted_password  │         │ avatar_url          │
│ email_confirmed_at  │         │ role                │
│ user_metadata       │         │ created_at          │
└─────────────────────┘         └─────────────────────┘
    Managed by Supabase           Managed by you
```

### **auth.users** (Supabase's table - you don't create this)

- Email, password, authentication tokens
- Managed entirely by Supabase
- You CANNOT directly insert/update this table

### **profiles** (Your table - you created this)

- User's public information (name, avatar, role)
- Links to auth.users via the `id` field
- You manage this data

## 🚀 User Registration Flow

### Step 1: User Signs Up

When a user creates an account:

```javascript
// User fills out signup form
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password',
  options: {
    data: {
      full_name: 'John Doe',
      avatar_url: 'https://example.com/avatar.jpg',
    },
  },
});

// Supabase automatically creates a record in auth.users
// Returns: { user: { id: 'uuid-here', email: '...' }, session: {...} }
```

### Step 2: Create Profile

**IMPORTANT:** After signup, you MUST create a profile record:

```javascript
if (data.user) {
  const { error: profileError } = await supabase.from('profiles').insert({
    id: data.user.id, // Same ID as auth.users
    name: data.user.user_metadata.full_name || data.user.email,
    avatar_url: data.user.user_metadata.avatar_url,
    role: 'member', // Default role
  });
}
```

## 🎯 Complete Registration Component Example

Here's a complete Vue component for registration:

```vue
<!-- src/components/SignUpForm.vue -->
<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const email = ref('');
const password = ref('');
const fullName = ref('');
const loading = ref(false);
const errorMessage = ref('');

async function handleSignUp() {
  try {
    loading.value = true;
    errorMessage.value = '';

    // Step 1: Sign up with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: fullName.value,
        },
      },
    });

    if (authError) throw authError;

    // Step 2: Create profile
    if (authData.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: authData.user.id,
        name: fullName.value || email.value.split('@')[0],
        role: 'member',
      });

      if (profileError) throw profileError;

      alert(
        'Registration successful! Check your email to confirm your account.',
      );
      // Redirect to login or home page
      window.location.href = '/';
    }
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Sign Up</h2>

    <form @submit.prevent="handleSignUp" class="space-y-4">
      <div>
        <label class="block mb-2">Full Name</label>
        <input
          v-model="fullName"
          type="text"
          required
          class="w-full px-4 py-2 border rounded"
          placeholder="John Doe" />
      </div>

      <div>
        <label class="block mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-2 border rounded"
          placeholder="you@example.com" />
      </div>

      <div>
        <label class="block mb-2">Password</label>
        <input
          v-model="password"
          type="password"
          required
          minlength="6"
          class="w-full px-4 py-2 border rounded"
          placeholder="••••••••" />
      </div>

      <div v-if="errorMessage" class="text-red-600">
        {{ errorMessage }}
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50">
        {{ loading ? 'Signing up...' : 'Sign Up' }}
      </button>
    </form>
  </div>
</template>
```

## 🔑 Login Component

```vue
<!-- src/components/SignInForm.vue -->
<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

async function handleSignIn() {
  try {
    loading.value = true;
    errorMessage.value = '';

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    // Redirect to dashboard or home
    window.location.href = '/dashboard';
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Sign In</h2>

    <form @submit.prevent="handleSignIn" class="space-y-4">
      <div>
        <label class="block mb-2">Email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-2 border rounded" />
      </div>

      <div>
        <label class="block mb-2">Password</label>
        <input
          v-model="password"
          type="password"
          required
          class="w-full px-4 py-2 border rounded" />
      </div>

      <div v-if="errorMessage" class="text-red-600">
        {{ errorMessage }}
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {{ loading ? 'Signing in...' : 'Sign In' }}
      </button>
    </form>
  </div>
</template>
```

## 👤 Getting Current User

```javascript
// Get currently logged in user
const {
  data: { user },
} = await supabase.auth.getUser();

if (user) {
  // User is logged in
  console.log('User ID:', user.id);
  console.log('Email:', user.email);

  // Get their profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  console.log('Name:', profile.name);
  console.log('Role:', profile.role);
}
```

## 🔒 Protected Routes (Astro Example)

```astro
---
// src/pages/dashboard.astro
import Layout from '../layouts/Layout.astro';
import { supabase } from '../lib/supabaseClient';

// Server-side check
const { data: { session } } = await supabase.auth.getSession();

if (!session) {
  // Redirect to login if not authenticated
  return Astro.redirect('/login');
}

// Get user profile
const { data: profile } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', session.user.id)
  .single();
---

<Layout title="Dashboard">
  <h1>Welcome, {profile.name}!</h1>
  <p>Role: {profile.role}</p>

  <!-- Dashboard content here -->
</Layout>
```

## 🔐 Auth State Management (Vue Composable)

```javascript
// src/composables/useAuth.js
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

export function useAuth() {
  const user = ref(null);
  const profile = ref(null);
  const loading = ref(true);

  async function loadUser() {
    try {
      loading.value = true;

      // Get current user
      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser();
      user.value = currentUser;

      if (currentUser) {
        // Get profile
        const { data: userProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentUser.id)
          .single();

        profile.value = userProfile;
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      loading.value = false;
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    user.value = null;
    profile.value = null;
    window.location.href = '/';
  }

  onMounted(() => {
    loadUser();

    // Listen for auth changes
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        loadUser();
      } else if (event === 'SIGNED_OUT') {
        user.value = null;
        profile.value = null;
      }
    });
  });

  return {
    user,
    profile,
    loading,
    signOut,
    loadUser,
  };
}
```

## 🎨 Using the Composable

```vue
<script setup>
import { useAuth } from '../composables/useAuth';

const { user, profile, loading, signOut } = useAuth();
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>

    <div v-else-if="user">
      <p>Welcome, {{ profile?.name }}!</p>
      <button @click="signOut">Sign Out</button>
    </div>

    <div v-else>
      <a href="/login">Sign In</a>
      <a href="/signup">Sign Up</a>
    </div>
  </div>
</template>
```

## 🚨 IMPORTANT: Profile Creation Trigger (BETTER APPROACH)

Instead of manually creating profiles, use a **database trigger** to automatically create a profile when a user signs up:

```sql
-- Add this to your supabase-schema.sql file

-- Function to create profile automatically
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, avatar_url, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    NEW.raw_user_meta_data->>'avatar_url',
    'member'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to run after user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

**With this trigger, profiles are created automatically!** You don't need to manually insert them.

## 📧 Email Confirmation

By default, Supabase requires email confirmation. Configure this in:

- Supabase Dashboard → Authentication → Settings
- Disable "Enable email confirmations" for development
- Keep it enabled for production

## 🔑 Social Auth (Google, GitHub, etc.)

```javascript
// Sign in with Google
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: 'http://localhost:4321/auth/callback',
  },
});

// Sign in with GitHub
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github',
  options: {
    redirectTo: 'http://localhost:4321/auth/callback',
  },
});
```

**Setup:**

1. Go to Supabase Dashboard → Authentication → Providers
2. Enable Google/GitHub
3. Add OAuth credentials from Google/GitHub console

## 🎯 Complete User Flow Summary

1. **User visits site** → Not logged in → See public content only
2. **User clicks "Sign Up"** → Fill form → `supabase.auth.signUp()`
3. **Supabase creates auth.users record** → Email sent for confirmation
4. **Database trigger creates profiles record** → User now has profile
5. **User confirms email** → Account activated
6. **User clicks "Sign In"** → `supabase.auth.signInWithPassword()`
7. **User is logged in** → Can create books, comment, like, etc.
8. **User clicks "Sign Out"** → `supabase.auth.signOut()` → Back to public view

## ✅ Checklist

- [ ] Apply the SQL schema from `supabase-schema.sql`
- [ ] Add the profile creation trigger (recommended)
- [ ] Configure email settings in Supabase Dashboard
- [ ] Create signup component
- [ ] Create login component
- [ ] Implement auth state management
- [ ] Protect routes that require authentication
- [ ] Test the complete flow

## 🔗 Next Steps

1. **Enable Authentication in Supabase:**
   - Dashboard → Authentication → Settings
   - Configure email templates
   - Set up OAuth providers (optional)

2. **Create Auth Pages:**
   - `/pages/signup.astro`
   - `/pages/login.astro`
   - `/pages/auth/callback.astro` (for OAuth)

3. **Test Everything:**
   - Sign up a new user
   - Check that profile is created
   - Try logging in
   - Test protected routes
   - Try creating a book

---

**Questions?** Check [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
