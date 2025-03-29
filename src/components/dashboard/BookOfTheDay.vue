<template>
  <section class="text-center px-4 max-w-4xl mx-auto py-8">
    <h1
      class="text-3xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-tight text-basque-40 mb-6">
      Eguneko liburua
    </h1>

    <picture>
      <source :srcset="bookImage320.src" media="(max-width: 480px)" />
      <source :srcset="bookImage640.src" media="(max-width: 768px)" />
      <source :srcset="bookImage1200.src" media="(max-width: 1440px)" />
      <source :srcset="bookImage1920.src" media="(min-width: 1441px)" />
      <img
        :src="books"
        alt="Books floating in space"
        class="rounded-lg shadow-lg mx-auto w-full max-w-4xl"
        loading="lazy" />
    </picture>

    <div class="mt-6 p-4 rounded bg-gray-800 border border-gray-700">
      <h3
        class="text-2xl font-bold text-basque-40 mb-2 transition-transform duration-800 hover:scale-105">
        {{ title }}
      </h3>
      <p class="text-sunsetGold text-xl">by {{ author }}</p>
    </div>
  </section>
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
