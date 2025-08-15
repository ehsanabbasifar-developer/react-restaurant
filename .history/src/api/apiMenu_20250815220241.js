import supabase from "./supabase";

export async function menuData() {
  try {
    let { data, error } = await supabase.from("menu").select("*");
    if (error) throw error;
    return { data, error };
  } catch (err) {
    console.log(err.message);
    return { err };
  }
}
