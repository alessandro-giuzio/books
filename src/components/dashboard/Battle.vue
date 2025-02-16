<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['concorrenti', 'libri']);

// Store competitors and books in Vue state
const competitors = ref([...props.concorrenti]); // Keep all competitors in memory
const books = ref([...props.libri]); // Keep all books in memory

const competitor1 = ref(null);
const competitor2 = ref(null);
const books1 = ref([]);
const books2 = ref([]);
const winner = ref(null);

// Function to pick two random competitors from local state
function getTwoRandomCompetitors() {
  if (competitors.value.length < 2) return;

  // Shuffle and pick two competitors
  const shuffled = [...competitors.value].sort(() => 0.5 - Math.random());
  competitor1.value = shuffled[0];
  competitor2.value = shuffled[1];

  // Get books read by each competitor
  books1.value = getBooksByCompetitor(competitor1.value);
  books2.value = getBooksByCompetitor(competitor2.value);

  // Determine winner
  winner.value = determineWinner();
}

// Get books for a given competitor
function getBooksByCompetitor(competitor) {
  if (!competitor) return [];
  return books.value.filter(
    ({ data }) =>
      data.concorrente.toLowerCase() === competitor.nome.toLowerCase() ||
      data.concorrente.toLowerCase() === competitor.username.toLowerCase()
  );
}

// Determine winner based on books read
function determineWinner() {
  if (!competitor1.value || !competitor2.value) return null;
  return books1.value.length > books2.value.length
    ? competitor1.value
    : books2.value.length > books1.value.length
      ? competitor2.value
      : null;
}

// Run on first load
onMounted(() => {
  getTwoRandomCompetitors();
});
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold my-6">📚 Reading Battle</h1>

    <div class="flex justify-center items-center gap-6">
      <!-- Competitor 1 -->
      <div
        class="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
        <img
          :src="competitor1?.image"
          :alt="competitor1?.nome"
          class="w-32 h-32 object-cover rounded-full" />
        <h2 class="text-xl font-semibold mt-2">{{ competitor1?.nome }}</h2>
        <p class="text-gray-600">📖 Books Read: {{ books1.length }}</p>
        <ul class="text-sm text-gray-500 mt-2">
          <li v-for="book in books1" :key="book.data.title">
            📘 {{ book.data.title }} ({{ book.data.pages }} pages)
          </li>
        </ul>
      </div>

      <!-- VS Text -->
      <div class="text-3xl font-bold text-red-600">VS</div>

      <!-- Competitor 2 -->
      <div
        class="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white">
        <img
          :src="competitor2?.image"
          :alt="competitor2?.nome"
          class="w-32 h-32 object-cover rounded-full" />
        <h2 class="text-xl font-semibold mt-2">{{ competitor2?.nome }}</h2>
        <p class="text-gray-600">📖 Books Read: {{ books2.length }}</p>
        <ul class="text-sm text-gray-500 mt-2">
          <li v-for="book in books2" :key="book.data.title">
            📘 {{ book.data.title }} ({{ book.data.pages }} pages)
          </li>
        </ul>
      </div>
    </div>

    <!-- Winner Announcement -->
    <div v-if="winner" class="text-center mt-6 p-4 bg-green-100 rounded-lg">
      <h2 class="text-2xl font-bold text-green-700">
        🏆 {{ winner.nome }} Wins!
      </h2>
    </div>

    <!-- Start New Battle Button -->
    <div class="text-center mt-6">
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md"
        @click="getTwoRandomCompetitors">
        Start New Battle
      </button>
    </div>
  </div>
</template>
