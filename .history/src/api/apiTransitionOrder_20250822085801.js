import { supabase } from "./supabase";

export async function TransitionOrder() {
  let { data: orders, error } = await supabase
    .from("orders")
    .select();
  if (error) {
    throw error;
  }
}
