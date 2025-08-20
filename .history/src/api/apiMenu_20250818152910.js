import { supabase } from "./supabase";

export async function menuData() {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ status: "someValue", other_column: "otherValue" }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
