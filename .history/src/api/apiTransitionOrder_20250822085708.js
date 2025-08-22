export async function TransitionOrder() {
  let { data: orders, error } = await su
    .from("orders")
    .select("some_column,other_column");
}
