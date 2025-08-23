import { supabase } from "./supabase";

export async function TransitionOrder() {
  let { data: orders, error } = await supabase
    .from("orders")
    .select(user_id : id);
  if (error) {
    throw error;
  }
}
