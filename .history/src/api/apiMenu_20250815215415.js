export async function menuData() {
  try {
    let { data: menu, error } = await supa.from("menu").select("*");
  } catch (err) {}
}
