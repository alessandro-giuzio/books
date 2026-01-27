<script setup lang="ts">
import { onMounted, ref } from 'vue';
import noCover from '@assets/images/no-cover.png';

type Book = {
  id: string;
  title: string;
  author: string;
  summary?: string | null;
  cover_url?: string | null;
  tags?: string[] | null;
  created_at?: string | null;
  like_count?: number | null;
  comment_count?: number | null; // Now returned from API
  creator_name?: string | null;
  average_rating?: number | null; // Use average_rating from API
};

const props = defineProps<{ limit?: number }>();
const books = ref<Book[]>([]);
const isLoading = ref(true);
const errorMessage = ref<string | null>(null);

const fetchBooks = async () => {
  const limit = Number.isFinite(props.limit) ? props.limit : 12;
  try {
    const response = await fetch(`/api/books?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to load books.');
    }
    const payload = await response.json();
    books.value = payload.data ?? [];
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Unexpected error loading books.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchBooks);
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-semibold text-gray-900">Latest reads</h2>
        <p class="text-sm text-gray-500">
          Fresh recommendations from the club.
        </p>
      </div>
    </div>

    <div v-if="isLoading" class="text-sm text-gray-500">Loading books…</div>
    <div v-else-if="errorMessage" class="text-sm text-red-600">
      {{ errorMessage }}
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="book in books"
        :key="book.id"
        class="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <a :href="`/books/${book.id}`" class="block">
          <div
            class="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              :src="book.cover_url || noCover"
              :alt="book.title"
              class="h-full w-full object-cover transition group-hover:scale-105"
              loading="lazy" />
          </div>
          <div class="mt-4 space-y-2">
            <div
              class="flex items-center justify-between text-xs text-gray-500">
              <span>{{ book.creator_name || 'Club member' }}</span>
              <span v-if="book.created_at">
                {{ new Date(book.created_at).toLocaleDateString() }}
              </span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">
              {{ book.title }}
            </h3>
            <!-- Average rating display: stars and number -->
            <div v-if="book.average_rating" class="flex items-center gap-1">
              <span v-for="n in 5" :key="n" class="text-yellow-400">
                <svg
                  v-if="n <= Math.round(book.average_rating)"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="w-4 h-4">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                  class="w-4 h-4">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              </span>
              <span class="ml-2 text-xs text-gray-500">
                {{ book.average_rating.toFixed(1) }}/5
              </span>
            </div>
            <p class="text-sm text-gray-500">by {{ book.author }}</p>
            <p v-if="book.summary" class="line-clamp-3 text-sm text-gray-600">
              {{ book.summary }}
            </p>
            <div v-if="book.tags?.length" class="flex flex-wrap gap-2">
              <span
                v-for="tag in book.tags"
                :key="tag"
                class="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                {{ tag }}
              </span>
            </div>
            <div class="flex items-center gap-4 text-xs text-gray-500">
              <span>{{ book.like_count ?? 0 }} likes</span>
              <span>{{ book.comment_count }} comments</span>
            </div>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>
