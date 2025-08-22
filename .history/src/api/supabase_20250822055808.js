import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzvmnawhujvcsgzzbgsq.supabase.co'
const supabaseKey = 'YOUR_ANON_KEY_HERE'  // این را از تنظیمات API بگیرید
export const supabase = createClient(supabaseUrl, supabaseKey)
