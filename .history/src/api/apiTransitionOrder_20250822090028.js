import { supabase } from "./supabase";

export async function TransitionOrder(userId) {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*") // همه ستون‌ها
      .eq("user_id", userId); // فقط رکوردهایی که user_id برابر با userId هست

    if (error) throw error;

    return orders;
  } catch (err) {
    console.error("خطا در TransitionOrder:", err);
    return null;
  }
}
