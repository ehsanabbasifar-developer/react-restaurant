import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dm1uYXdodWp2Y3NnenpiZ3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyODAwMTksImV4cCI6MjA3MDg1NjAxOX0.GiNQwBCTtaNCsaJSqHj2RL3nfocFrbhGoMU87uOA9XQ"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
