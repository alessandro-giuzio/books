<template>
  <div
    class="bg-black border-4 rounded-sm border-white pb-24 sm:pb-32 mx-auto outline-[10px] outline-black mb-2 flex flex-col gap-8">
    <div class="mx-auto max-w-2xl text-center">
      <BookOfTheDay :title="todayBook.title" :author="todayBook.author" />
    </div>
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t-4 border-white" />
      </div>
    </div>
    <ConcorrentiOnTv />
  </div>
</template>

<script setup lang="ts">
/* import tivo from '../../assets/images/tivo.png'; */
import BookOfTheDay from './BookOfTheDay.vue';
import ConcorrentiOnTv from './ConcorrentiOnTv.vue';

// List of books
const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'Moby-Dick', author: 'Herman Melville' },
  { title: 'Euskaldunon Egunkaria', author: 'Various Authors' },
  { title: 'Obabakoak', author: 'Bernardo Atxaga' },
  { title: 'Gizona bere bakardadean', author: 'Bernardo Atxaga' },
  { title: 'Soinujolearen semea', author: 'Bernardo Atxaga' },
  { title: 'Kutsidazu bidea, Ixabel', author: 'Joxean Sagastizabal' },
  { title: 'Aiturri', author: 'Txomin Urkiola' },
  { title: 'Lurrean Zubia', author: 'Unai Etxeberria' },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'Ulysses', author: 'James Joyce' },
  { title: 'Don Quixote', author: 'Miguel de Cervantes' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'Kafka on the Shore', author: 'Haruki Murakami' },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
  { title: 'War and Peace', author: 'Leo Tolstoy' },
  { title: 'The Divine Comedy', author: 'Dante Alighieri' },
  { title: 'Zorion perfektua', author: 'Anjel Lertxundi' },
  { title: 'Lagun izoztua', author: 'Joseba Sarrionandia' },
  { title: 'Itzalak ez du bihotza', author: 'Arantxa Urretabizkaia' },
  { title: 'Mila ezker', author: 'Karlos Linazasoro' },
  { title: 'Hamaika pauso', author: 'Ramon Saizarbitoria' },
  { title: 'Kristalezko begi bat', author: 'Miren Agur Meabe' },
  { title: 'Gauaren azterketa', author: 'Joseba Sarrionandia' },
  { title: 'Zeru horiek', author: 'Bernardo Atxaga' },
];

// Select a book at build time (using the day of the month)
const todayBook = books[new Date().getDate() % books.length];
</script>
