<template>
  <Card
    :concorrente="{
      ...concorrente,
      slug:
        concorrente.slug || concorrente.nome.toLowerCase().replace(/\s+/g, '-'),
    }"
    class="max-w-md shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow bg-white flex flex-col h-full">
    <!-- Adjusted Image -->
    <a :href="`/lehiakideak/${concorrente.slug}`">
      <img
        :src="concorrente.image?.src || '/placeholder-image.jpg'"
        :alt="`Cover of ${concorrente.nome}`"
        class="w-full h-52 md:h-72 object-cover aspect-16/10 rounded-t-md" />
    </a>

    <CardHeader class="p-4">
      <CardTitle class="text-xl font-semibold text-gray-900">
        <!--  <p class="text-sm mt-2 text-gray-700 tracking-wide">
          {{ concorrente.bio }}
        </p> -->
      </CardTitle>
      <CardDescription>
        <p class="text-sm mt-2 text-gray-700 tracking-wide leading-snug">
          {{ concorrente.bio }}
        </p>
      </CardDescription>
    </CardHeader>

    <!-- Flexible Content to Push Footer Down -->
    <CardContent class="p-4 text-gray-800 flex-grow">
      <p class="text-sm"></p>
    </CardContent>

    <!-- Footer Always Sticks to Bottom -->
    <CardFooter
      class="p-2 bg-gray-300 text-sm text-gray-600 flex justify-between mt-auto">
      <a a :href="`/lehiakideak/${concorrente.slug}`">
        <!--  {{ libro.concorrente }} -->
        {{ concorrente.nome }}
      </a>
      <!--  <a :href="`/liburuak/${libro.monthRead}/`">
        <span class="font-semibold text-xs">{{ libro.monthRead }}</span>
      </a> -->

      <!-- <span class="flex items-center gap-1 font-semibold">
        Punti: <span class="text-basque-20 font-bold">{{ libro.punti }}</span>
      </span> -->
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import type { ConcorrenteData } from '../../types/Concorrente';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const props = defineProps<{
  concorrente: ConcorrenteData;
}>();
</script>
