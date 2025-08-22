import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yzvmnawhujvcsgzzbgsq.supabase.co'
export const supabase = createClient(supabaseUrl, supabaseKey)
