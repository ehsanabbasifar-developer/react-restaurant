import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
