<template>
  <div
    class="bg-black border-4 border-white py-24 sm:py-32 mx-auto outline-[10px] outline-black mb-2 flex flex-col gap-8">
    <div class="mx-auto max-w-2xl text-center">
      <BookOfTheDay :title="todayBook.title" :author="todayBook.author" />
      <!--   <h1
        class="text-5xl font-semibold tracking-tight text-basque-40 sm:text-7xl">
        📖 Libro del dia
      </h1>
      <p
        class="mt-8 text-pretty text-center text-lg font-medium text-basque-40 sm:text-xl/8">
        Today's suggested book to read is:
      </p>
      <div
        class="mt-6 p-4 border border-gray-600 rounded bg-gray-800 text-white">
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <p class="text-gray-300">by {{ author }}</p>
      </div> -->
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t-4 border-white" />
      </div>
      <!-- <div class="relative flex justify-center">
        <span class="bg-white px-2 text-sm text-gray-500">Continue</span>
      </div> -->
    </div>
    <ConcorrentiOnTv />
    <div class="flex flex-col justify-center items-center gap-4">
      <span class="text-sunsetGold">Sponsored by</span>
      <img :src="tivo.src" alt="Astro" class="w-24 h-24" />
    </div>
  </div>
</template>

<script setup lang="ts">
import tivo from '../../assets/images/tivo.png';
import BookOfTheDay from './BookOfTheDay.vue';
import ConcorrentiOnTv from './ConcorrentiOnTv.vue';

// List of books
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'Moby-Dick', author: 'Herman Melville' },
];

// Select a book at build time (using the day of the month)
const todayBook = books[new Date().getDate() % books.length];
</script>
