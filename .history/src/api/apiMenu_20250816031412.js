import { supabase } from "./supabase";

export async function menuData() {
  const { data, error } = await supabase
    .from("memnu")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

