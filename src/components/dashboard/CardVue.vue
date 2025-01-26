<script setup lang="ts">
import type { Libros25 } from '../../types/Libros25';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

defineProps<{
  libro: Libros25;
}>();
</script>

<template>
  <Card
    class="max-w-md shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow bg-white">
    <img
      :src="libro.cover || '/placeholder-image.jpg'"
      :alt="`Cover of ${libro.title}`"
      class="w-full h-70 object-cover rounded-t-md" />
    <CardHeader>
      <CardTitle class="text-xl font-semibold text-gray-900"
        >{{ libro.title }}
        <p class="text-sm">
          {{ libro.author }}
        </p>
      </CardTitle>
      <CardDescription class="text-sm text-gray-900 mt-1">
        {{ libro.body }}
      </CardDescription>
    </CardHeader>
    <CardContent class="p-4 text-gray-800">
      <p class="text-sm"></p>
    </CardContent>
    <CardFooter
      class="p-4 bg-gray-100 text-sm text-gray-600 flex justify-between">
      <span class="first-letter:uppercase font-semibold">{{
        libro.concorrente
      }}</span>
      <span class="flex gap-1 justify-center items-center font-semibold"
        >Punti:
        <span class="text-basque-20 font-bold">{{ libro.punti }}</span></span
      >
      <!-- <span>Read in {{ libro.yearRead }}</span> -->
    </CardFooter>
  </Card>
</template>
