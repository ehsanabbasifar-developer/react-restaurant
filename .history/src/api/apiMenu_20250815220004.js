
export async function menuData() {
  try {
    let { data, error } = await s.from("menu").select("*");
  } catch (err) {}
}
