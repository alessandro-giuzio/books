<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { supabase } from '../../lib/supabaseClient.js';
import { authFetch } from '../../lib/authFetch.js';

const form = reactive({
  title: '',
  author: '',
  summary: '',
  tags: '',
  cover_url: '',
  rating: 3, // Default rating value
});

const isSubmitting = ref(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);
const hasSession = ref(false);

const checkSession = async () => {
  const { data } = await supabase.auth.getSession();
  hasSession.value = Boolean(data?.session);
};

const isValid = computed(() => form.title.trim() && form.author.trim());

const resetMessages = () => {
  errorMessage.value = null;
  successMessage.value = null;
};

const handleSubmit = async () => {
  resetMessages();
  if (!isValid.value) {
    errorMessage.value = 'Title and author are required.';
    return;
  }

  isSubmitting.value = true;

  try {
    const payload = {
      title: form.title.trim(),
      author: form.author.trim(),
      summary: form.summary.trim() || null,
      cover_url: form.cover_url.trim() || null,
      tags: form.tags
        ? form.tags
            .split(',')
            .map(tag => tag.trim())
            .filter(Boolean)
        : [],
      rating: form.rating, // Add rating to payload
    };

    const response = await authFetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.error || 'Failed to submit book.');
    }

    successMessage.value = 'Book submitted! It will appear in the feed.';
    form.title = '';
    form.author = '';
    form.summary = '';
    form.tags = '';
    form.cover_url = '';
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Unexpected error.';
  } finally {
    isSubmitting.value = false;
  }
};

checkSession();
</script>

<template>
  <section class="mx-auto max-w-2xl px-4 py-12">
    <div class="mb-8">
      <h1 class="text-3xl font-semibold text-gray-900">Submit a book</h1>
      <p class="mt-2 text-sm text-gray-500">
        Share what you have been reading with the club.
      </p>
    </div>

    <div
      v-if="!hasSession"
      class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      You need to be signed in to submit a book.
      <a href="/login" class="ml-2 font-semibold underline">Sign in</a>
    </div>

    <form
      v-else
      class="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      @submit.prevent="handleSubmit">
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700" for="title"
          >Title</label
        >
        <input
          id="title"
          v-model="form.title"
          type="text"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder="Book title"
          required />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700" for="author"
          >Author</label
        >
        <input
          id="author"
          v-model="form.author"
          type="text"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder="Author name"
          required />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700" for="summary"
          >Summary</label
        >
        <textarea
          id="summary"
          v-model="form.summary"
          rows="4"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder="Short notes or why you loved it"></textarea>
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700" for="tags">Tags</label>
        <input
          id="tags"
          v-model="form.tags"
          type="text"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder="fiction, mystery, sci-fi" />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700" for="cover"
          >Cover URL</label
        >
        <input
          id="cover"
          v-model="form.cover_url"
          type="url"
          class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          placeholder="https://..." />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700" for="rating"
          >Rating</label
        >
        <div class="flex items-center gap-2">
          <span v-for="n in 5" :key="n">
            <button
              type="button"
              @click="form.rating = n"
              :aria-label="`Set rating to ${n}`"
              class="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :fill="n <= form.rating ? 'currentColor' : 'none'"
                viewBox="0 0 20 20"
                class="w-6 h-6 text-yellow-400"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            </button>
          </span>
          <span class="ml-2 text-xs text-gray-500">{{ form.rating }}/5</span>
        </div>
      </div>

      <div v-if="errorMessage" class="text-sm text-red-600">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="text-sm text-green-600">
        {{ successMessage }}
      </div>

      <button
        type="submit"
        class="w-full rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting…' : 'Submit book' }}
      </button>
    </form>
  </section>
</template>
