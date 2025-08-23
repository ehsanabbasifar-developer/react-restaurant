import { supabase } from "./supabase";

export async function TransitionOrder(userId) {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*") // همه 
      .eq("user_id", userId);     

    if (error) throw error;

    return orders;
  } catch (err) {
    console.error("خطا در TransitionOrder:", err);
    return null;
  }
}
