<template>
  <h2 class="text-5xl font-semibold tracking-tight text-basque-40 sm:text-7xl">
    📖 Book of the Day
  </h2>
  <p
    class="mt-8 text-pretty text-center text-lg font-medium text-basque-40 sm:text-xl/8">
    Today's featured book:
  </p>

  <div class="mt-6 p-4 border border-gray-600 rounded bg-gray-800">
    <h3 class="text-xl font-bold text-basque-40">{{ title }}</h3>
    <p class="text-basque-40">by {{ author }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  author: string;
}>();
</script>
