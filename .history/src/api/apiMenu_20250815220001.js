
export async function menuData() {
  try {
    let { data, error } = await supabase.from("menu").select("*");
  } catch (err) {}
}
