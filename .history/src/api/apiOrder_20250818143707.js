export async function insertOrder() {
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        transition_id: "12345",
        status: "pending",  
      },
    ])
    .select();

  if (error) {
    throw new error("")
  }
}
