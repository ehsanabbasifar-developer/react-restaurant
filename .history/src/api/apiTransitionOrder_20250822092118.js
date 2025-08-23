export async function TransitionOrder(transactionId) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("transaction_id", transactionId);

  if (error) {
    throw new Error(error.message);
    console.log(error);
    
  }
console.log(orde);

  return orders;
}
