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
]);

// ✅ Reactive state for current concorrente
const currentConcorrente = ref(concorrenti.value[0]);

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  console.log('✅ Vue Mounted: ConcorrentiOnTv is running inside Astro');

  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * concorrenti.value.length);
    currentConcorrente.value = { ...concorrenti.value[randomIndex] };

    console.log('🎯 New concorrente:', currentConcorrente.value.name);
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
    <span class="text-sunsetGold text-lg font-bold">Concorrenti</span>

    <!-- TV Image Container -->
    <div class="relative w-48 h-48">
      <img :src="tivo.src" alt="Astro" class="w-48 h-48" />

      <!-- Contestant Name on TV -->
      <div
        class="absolute inset-0 flex justify-center items-center text-white text-xl font-bold bg-black/50">
        {{ currentConcorrente.name }}
      </div>
    </div>
  </div>
</template>
