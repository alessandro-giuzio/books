<template>
  <Card
    class="max-w-md shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow bg-white flex flex-col h-full">
    <!-- Adjusted Image -->
    <a :href="`/liburuak/${libro.slug}`">
      <img
        :src="libro.cover || '/placeholder-image.jpg'"
        :alt="`Cover of ${libro.title}`"
        class="w-full h-52 md:h-72 object-cover object-top rounded-t-md" />
    </a>

    <CardHeader class="p-4">
      <CardTitle class="text-xl font-semibold text-gray-900">
        {{ libro.title }}
        <p class="text-sm text-gray-700">{{ libro.author }}</p>
      </CardTitle>
      <CardDescription class="text-sm text-gray-700 mt-1 line-clamp-4">
        {{ libro.body }}
      </CardDescription>
    </CardHeader>

    <!-- Flexible Content to Push Footer Down -->
    <CardContent class="p-4 text-gray-800 flex-grow">
      <p class="text-sm"></p>
    </CardContent>

    <!-- Footer Always Sticks to Bottom -->
    <CardFooter
      class="p-2 bg-gray-100 text-sm text-gray-600 flex justify-between mt-auto">
      <a
        :href="`/concorrenti/${libro.concorrente}`"
        class="first-letter:uppercase">
        {{ libro.concorrente }}
      </a>
      <a :href="`/liburuak/${libro.monthRead}/`">
        <span class="font-semibold text-xs">{{ libro.monthRead }}</span></a
      >
      <span class="flex items-center gap-1 font-semibold">
        Punti: <span class="text-basque-20 font-bold">{{ libro.punti }}</span>
      </span>
    </CardFooter>
  </Card>
</template>
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
