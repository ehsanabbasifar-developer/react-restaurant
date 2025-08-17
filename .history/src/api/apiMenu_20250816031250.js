import { supabase } from "./supabase";

export async function menuData() {
  const { data, error } = await supabase
    .from("meنnu")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

