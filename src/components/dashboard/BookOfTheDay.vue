<template>
  <h2
    class="text-6xl font-semibold uppercase text-center tracking-tight text-basque-40 sm:text-7xl">
    📖 Eguneko liburua
  </h2>
  <!-- <p
    class="mt-8 text-pretty text-center text-lg font-medium text-basque-40 sm:text-xl/8">
    Today's featured book:
  </p> -->

  <div class="mt-6 p-4 border border-gray-800 rounded bg-gray-800">
    <h3 class="text-2xl font-bold shadow-xl text-basque-40 mb-2">
      {{ title }}
    </h3>
    <p class="text-sunsetGold text-xl mb-0">by {{ author }}</p>
  </div>
</template>

<script setup lang="ts">
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
