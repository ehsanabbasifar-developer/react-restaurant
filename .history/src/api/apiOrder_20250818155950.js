import { supabase } from "./supabase";

export async function insertOrder() {
  const { data, error } = await supabase.from("orders").insert([{}]).select();

  if (error) {
    throw error;
  }

  return data;
}
