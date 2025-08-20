import { supabase } from "./supabase";

export async function menuData(value) {
  
let { data: menu, error } = await supabase
  .from('menu')
  .select('*')


  if (error) {
    throw new Error(error.message);
  }

  return data;
}
