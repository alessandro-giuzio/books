<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import tivo from '../../assets/images/tivo.png';

// Define concorrenti as a reactive array
const concorrenti = ref([
  { name: 'Alessandro' },
  { name: 'Amaia' },
  { name: 'Luca' },
  { name: 'Irene' },
  { name: 'Unai' },
  { name: 'Malen' },
  { name: 'Oihana' },
  { name: 'Maren' },
]);

// ✅ Track the index instead of reassigning objects
const currentIndex = ref(0);

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  console.log('✅ Vue Mounted: ConcorrentiOnTv is running inside Astro');

  // Automatically change concorrenti every 3 seconds
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % concorrenti.value.length;
  }, 3000);
});

// ✅ Cleanup interval
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
  console.log('⛔ Vue Unmounted: Interval cleared');
});
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 relative">
    <span class="text-sunsetGold text-3xl font-bold">Lehiakideak</span>

    <!-- TV Image Container -->
    <div class="relative w-48 h-48">
      <img :src="tivo.src" alt="Astro" class="w-48 h-48" />

      <!-- Contestant Name on TV -->
      <div
        class="absolute inset-0 flex justify-center items-center text-sunsetGold text-2xl font-bold bg-black/50">
        {{ concorrenti[currentIndex].name }}
      </div>
    </div>
  </div>
</template>
