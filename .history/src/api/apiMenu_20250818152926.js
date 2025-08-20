import { supabase } from "./supabase";

export async function menuData(value) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ status: value }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
