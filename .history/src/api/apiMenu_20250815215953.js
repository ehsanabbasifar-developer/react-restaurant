import supabase from "./supabase";

export async function menuData() {
  try {
    let { data, error } = await su.from("menu").select("*");
  } catch (err) {}
}
