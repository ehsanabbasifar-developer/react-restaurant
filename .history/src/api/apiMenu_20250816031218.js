export async function menuData() {
  const { data, error } = await supabase
    .from("menu")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
