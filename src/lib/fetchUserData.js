// Import the Supabase client
import { supabase } from "./supabaseClient.js";

export async function handleUser() {
  try {

    let { data: Concorrenti, error } = await supabase
    .from('Concorrenti')
    .select('nome')

    console.log('Fetched Data:', Concorrenti);  // Log the data to see what is returned
    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }

    if (!Concorrenti || Concorrenti.length === 0) {
      console.log('No records found');
      return [];
    }

    return Concorrenti;
  } catch (error) {
    console.error('Unexpected error:', error);
    return null;
  }
}





