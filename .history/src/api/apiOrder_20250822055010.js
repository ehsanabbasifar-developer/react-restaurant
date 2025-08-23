import { supabase } from "./supabase";

// تابعی که ابتدا بررسی می‌کند کاربر لاگین است و سپس INSERT می‌زند
export async function insertOrder() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("ابتدا باید وارد حساب شوید");
  }

  // INSERT خالی، چون ستون‌ها default دارند
  const { data, error } = await supabase.from("orders").insert([{}]).select();

  if (error) throw error;
  return data;
}
