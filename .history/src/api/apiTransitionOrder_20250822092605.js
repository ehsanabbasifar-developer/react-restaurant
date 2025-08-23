import { supabase } from "./supabase";

export async function apiTransitionOrder(transactionId) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("transaction_id", transactionId);

  if (error) {
    throw new Error(error.message);
    console.log(error);
  }
  console.log(orders);

  return orders;
}
