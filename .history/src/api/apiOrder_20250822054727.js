import { supabase } from "./supabase";

export async function insertOrder() {
  const { data: user } = await supabase.auth.getUser();
  if (!user) throw new Error("کاربر لاگین نیست");

  const { data, error } = await supabase.from("orders").insert([{}]).select();
  if (error) throw error;
  return data;
}
