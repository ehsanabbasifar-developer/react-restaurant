// src/api/supabase.js
import { createClient } from "@supabase/supabase-js";

// آدرس پروژه خودت در Supabase
const SUPABASE_URL = "https://yzvmnawhujvcsgzzbgsq.supabase.co";

// کلاینت API Key (anon key) برای استفاده در frontend
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dm1uYXdodWp2Y3NnenpiZ3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyODAwMTksImV4cCI6MjA3MDg1NjAxOX0.GiNQwBCTtaNCsaJSqHj2RL3nfocFrbhGoMU87uOA9XQ";

// ساخت client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
