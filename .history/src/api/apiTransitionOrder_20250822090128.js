import { supabase } from "./supabase";

export async function TransitionOrder(userId) {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")   
      .eq("user_id", userId);     

    if (error) throw new Error(err);

    return orders;
  } catch (err) {
    console.error("خطا در TransitionOrder:", err);
    return null;
  }
}
