<template>
  <picture>
    <!-- Smallest image for small devices -->
    <source
      :srcset="bookImage320.src"
      media="(max-width: 480px)"
      alt="books in space"
      class="rounded-lg shadow-lg mx-auto w-full" />

    <!-- Medium image for tablets -->
    <source
      :srcset="bookImage640.src"
      media="(max-width: 768px)"
      alt="books in space"
      class="rounded-lg shadow-lg mx-auto w-full" />

    <!-- Larger image for desktops -->
    <source
      :srcset="bookImage1200.src"
      media="(max-width: 1440px)"
      alt="books in space"
      class="rounded-lg shadow-lg mx-auto w-full" />

    <!-- Largest image for large desktops -->
    <source
      :srcset="bookImage1920.src"
      media="(min-width: 1441px)"
      alt="books in space"
      class="rounded-lg shadow-lg mx-auto w-full" />
    <!-- Fallback -->
    <img
      :src="books"
      alt="books in space"
      class="rounded-lg shadow-lg mx-auto w-full"
      loading="lazy" />
  </picture>
  <h2
    class="text-5xl font-semibold uppercase text-center tracking-tight text-basque-40">
    Eguneko liburua
  </h2>
  <div class="mt-6 p-4 border border-gray-800 rounded bg-gray-800">
    <h3 class="text-2xl font-bold shadow-xl text-basque-40 mb-2">
      {{ title }}
    </h3>
    <p class="text-sunsetGold text-xl mb-0">by {{ author }}</p>
  </div>
</template>

<script setup lang="ts">
import bookImage from '../../assets/images/BooksInSpace.jpg';
import bookImage320 from '../../assets/images/BooksInSpace-320.webp';
import bookImage640 from '../../assets/images/BooksInSpace-640.webp';
import bookImage1200 from '../../assets/images/BooksInSpace-1200.webp';
import bookImage1920 from '../../assets/images/BooksInSpace-1920.webp';
const books = bookImage.src;
const props = defineProps<{
  title: string;
  author: string;
}>();
</script>
<style>
.bg-gray-800 {
  background: linear-gradient(145deg, #2c2c2c, #333333);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05); /* Slightly larger in the middle of the animation */
  }
}

h3 {
  display: inline-block;
  animation: pulse 2s infinite ease-in-out;
}
</style>
