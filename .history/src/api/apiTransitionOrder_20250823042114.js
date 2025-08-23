import { supabase } from "./supabase";

export async function apiTransitionOrder(transactionId) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("transaction_id", transactionId);
   console.log(data);
   
  if (error) {
    throw new Error(error.message);
    console.log(error);
  }
  return data;
}
