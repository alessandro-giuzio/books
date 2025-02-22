<script setup>
import { move } from 'astro-vtbot/animations/move';
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  text: String,
});

const heading = ref(null);

onMounted(() => {
  nextTick(() => {
    if (heading.value) {
      move(heading.value, {
        duration: '0.8s',
        easing: 'ease-out',
        delay: '0.2s',
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      });
    }
  });
});
</script>

<template>
  <h2 ref="heading" class="md:text-4xl text-lg font-semibold mb-4">
    {{ text }}
  </h2>
</template>
