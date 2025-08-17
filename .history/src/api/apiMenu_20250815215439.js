import supabase, { supabaseUrl } from "./supabase";

export async function menuData() {
  try {
    let { data: menu, error } = await supabase.from("menu").select("*");
  } catch (err) {}
}
