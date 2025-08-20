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
    console.error("Error inserting order:", error);
  } else {
    console.log("Inserted order:", data);
  }
}
