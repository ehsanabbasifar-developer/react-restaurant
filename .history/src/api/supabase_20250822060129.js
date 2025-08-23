import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzvmnawhujvcsgzzbgsq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dm1uYXdodWp2Y3NnenpiZ3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyODAwMTksImV4cCI6MjA3MDg1NjAxOX0.GiNQwBCTtaNCsaJSqHj2RL3nfocFrbhGoMU87uOA9XQ'
export const supabase = createClient(supabaseUrl, supabaseKey)
