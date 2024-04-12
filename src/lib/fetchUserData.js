// Import the Supabase client
import { supabase } from "./supabaseClient.js";

export async function handleUser() {
  let { data: Concorrenti, error } = await supabase
  .from('Concorrenti')
  .select('nome')

  if (error) {
    console.error(error);
    return null; // Handle the error as needed
  }

  return Concorrenti; // Return the fetched data
}



