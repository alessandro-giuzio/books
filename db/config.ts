import { defineDb, defineTable, column } from 'astro:db';
const concorrenti = defineTable({
  name: 'concorrenti',
  columns: [
    column('id', 'number', { primaryKey: true }),
    column('nome', 'string'),
    column('cognome', 'string'),
    column('email', 'string'),
    column('password', 'string'),
    column('data_nascita', 'string'),
    column('sesso', 'string'),
    column('telefono', 'string'),
    column('indirizzo', 'string'),
    column('citta', 'string'),
    column('cap', 'string'),
    column('provincia', 'string'),
    column('nazione', 'string'),
    column('codice_fiscale', 'string'),
    column('partita_iva', 'string'),
    column('tipo', 'string'),
    column('status', 'string'),
    column('created_at', 'string'),
    column('updated_at', 'string'),
  ],
});
// https://astro.build/db/config
export default defineDb({
  tables: {concorrenti}
});
