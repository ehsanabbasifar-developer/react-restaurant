export async function insertOrder() {
  const { data, error } = await supabase
    .from("orders")
    .insert([{}])
    .select();

  if (error) {
    throw new Error("Can't insert your order into the database");
  }

  return data;
}
