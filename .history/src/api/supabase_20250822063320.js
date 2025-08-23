import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://epqypihfdxfzxjmoaoti.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwcXlwaWhmZHhmenhqbW9hb3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4Mjc5MDcsImV4cCI6MjA3MTQwMzkwN30.ggXiA7S03aySJuPcC5LC_G_G3sxfcutN9eAC5Jz3UZU";
const supabase = createClient(supabaseUrl, supabaseKey);

export  {supabase};
