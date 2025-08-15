export async function menuData() {
  try {
    let { data: menu, error } = await .from("menu").select("*");
  } catch (err) {}
}
