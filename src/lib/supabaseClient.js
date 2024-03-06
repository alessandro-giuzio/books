import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fpuiektkhcsapkjkxmjd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwdWlla3RraGNzYXBramt4bWpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NDgyODEsImV4cCI6MjAyNTIyNDI4MX0.vBYi4IzWAk3m2JxV0RSbPcQIe4j6CLUutkxKIzoFfOo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);