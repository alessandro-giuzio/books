<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { supabase } from '../../lib/supabaseClient.js';
import { authFetch } from '../../lib/authFetch.js';

type Comment = {
  id: string;
  body: string;
  created_at?: string | null;
  user_name?: string | null;
  user_avatar?: string | null;
};

const props = defineProps<{ bookId: string }>();
const comments = ref<Comment[]>([]);
const isLoading = ref(true);
const errorMessage = ref<string | null>(null);
const hasSession = ref(false);
const newComment = ref('');
const isSubmitting = ref(false);

const fetchComments = async () => {
  try {
    const response = await fetch(`/api/comments?book_id=${props.bookId}`);
    if (!response.ok) {
      throw new Error('Failed to load comments.');
    }
    const payload = await response.json();
    comments.value = payload.data ?? [];
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Unexpected error loading comments.';
  } finally {
    isLoading.value = false;
  }
};

const checkSession = async () => {
  const { data } = await supabase.auth.getSession();
  hasSession.value = Boolean(data?.session);
};

const submitComment = async () => {
  if (!newComment.value.trim()) {
    return;
  }

  isSubmitting.value = true;
  try {
    const response = await authFetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        book_id: props.bookId,
        body: newComment.value.trim(),
      }),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.error || 'Failed to post comment.');
    }

    newComment.value = '';
    await fetchComments();
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Unexpected error.';
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(async () => {
  await Promise.all([fetchComments(), checkSession()]);
});
</script>

<template>
  <section class="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <h2 class="text-xl font-semibold text-gray-900">Comments</h2>

    <div v-if="isLoading" class="mt-4 text-sm text-gray-500">
      Loading comments…
    </div>
    <div v-else-if="errorMessage" class="mt-4 text-sm text-red-600">
      {{ errorMessage }}
    </div>

    <div v-else class="mt-6 space-y-4">
      <article
        v-for="comment in comments"
        :key="comment.id"
        class="rounded-xl border border-gray-100 bg-gray-50 p-4"
      >
        <div class="flex items-center justify-between text-xs text-gray-500">
          <div class="flex items-center gap-2">
            <span class="font-semibold text-gray-700">
              {{ comment.user_name || 'Club member' }}
            </span>
          </div>
          <span v-if="comment.created_at">
            {{ new Date(comment.created_at).toLocaleString() }}
          </span>
        </div>
        <p class="mt-2 text-sm text-gray-700">
          {{ comment.body }}
        </p>
      </article>
    </div>

    <div v-if="hasSession" class="mt-8 space-y-3">
      <label class="text-sm font-medium text-gray-700" for="comment">
        Add a comment
      </label>
      <textarea
        id="comment"
        v-model="newComment"
        rows="3"
        class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
        placeholder="Share your thoughts"
      ></textarea>
      <button
        class="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="isSubmitting"
        type="button"
        @click="submitComment"
      >
        {{ isSubmitting ? 'Posting…' : 'Post comment' }}
      </button>
    </div>

    <div v-else class="mt-6 text-sm text-gray-500">
      Sign in to leave a comment.
      <a href="/login" class="ml-1 font-semibold text-gray-900 underline">
        Sign in
      </a>
    </div>
  </section>
</template>
