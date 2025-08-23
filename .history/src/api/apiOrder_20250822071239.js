import { supabase } from "./supabase";

export async function insertOrder() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("ابتدا باید وارد حساب شوید");
  }

  const { data, error } = await supabase
    .from("orders")
    .insert([{ user_id: user.id }])  // مهم: user_id حتما اضافه شود
    .select();

  if (error) throw error;

  return data;
}
