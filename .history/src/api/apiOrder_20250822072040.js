import { supabase } from "./supabase";

export async function insertOrder() {
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("ابتدا باید وارد حساب شوید");
  }

  const { data, error } = await supabase
    .from("orders")
    .insert([{ user_id: user.id }]) // حتما user_id از کاربر لاگین شده
    .select();

  if (error) throw error;
  return data;
}
