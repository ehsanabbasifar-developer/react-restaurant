export async function menuData() {
  try {
    let { data: menu, error } = await su.from("menu").select("*");
  } catch (err) {}
}
