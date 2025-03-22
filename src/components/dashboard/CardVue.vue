<template>
  <Card
    class="flex flex-col h-full max-w-md overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl">
    <!-- Adjusted Image -->
    <a :href="`/liburuak/${libro.slug}`">
      <img
        :src="libro.cover || '/placeholder-image.jpg'"
        :alt="`Cover of ${libro.title}`"
        class="object-cover object-top w-full h-52 md:h-72 rounded-t-md" />
    </a>

    <CardHeader class="p-4">
      <CardTitle class="text-xl font-semibold text-gray-900">
        {{ libro.title }}
        <p class="text-sm text-gray-700">{{ libro.author }}</p>
      </CardTitle>
      <CardDescription class="mt-1 text-sm text-gray-700 line-clamp-4">
        {{ libro.body }}
      </CardDescription>
    </CardHeader>

    <!-- Flexible Content to Push Footer Down -->
    <CardContent class="flex-grow p-4 text-gray-800">
      <p class="text-sm"></p>
    </CardContent>

    <!-- Footer Always Sticks to Bottom -->
    <CardFooter
      class="flex justify-between p-2 mt-auto text-sm text-gray-600 bg-gray-100">
      <a
        :href="`/lehiakideak/${libro.concorrente}`"
        class="first-letter:uppercase">
        {{ libro.concorrente }}
      </a>
      <a :href="`/liburuak/${libro.monthRead}/`">
        <span class="text-xs font-semibold">{{ libro.monthRead }}</span></a
      >
      <span class="flex items-center gap-1 font-semibold">
        P: <span class="font-bold text-basque-20">{{ libro.punti }}</span>
      </span>
    </CardFooter>
  </Card>
</template>
<script setup lang="ts">
import type { Libros25 } from '../../types/Libros25';
import type { Libros24 } from '../../types/Libros24';
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
