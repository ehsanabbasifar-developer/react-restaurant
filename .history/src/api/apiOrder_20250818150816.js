import { supabase } from "./supabase";

export async function insertOrder() {
  const { data, error } = await supabase
    .from("orders")
    .insert([{}]) // هیچ ستونی ارسال نمی‌کنیم
    .select();

  if (error) {
    throw new Error("Can't insert your order into the database");
  }

  return data;
}
