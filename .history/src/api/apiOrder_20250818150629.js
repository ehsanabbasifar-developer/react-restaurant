export async function insertOrder() {
  const { data, error } = await su
    .from("orders")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) {
    throw new Error("cant insert your order in to the database");
  }
}
