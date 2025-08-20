import { supabase } from "./supabase";

export async function insertOrder() {
  const { data, error } = await supabase.from("orders").insert([{}).select();

  if (error) {
    throw new Error("Can't insert your order into the database");
    console.log(error);
  }

  return data;
}
