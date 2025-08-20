import { supabase } from "./supabase";

export async function menuData() {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ status: value }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
