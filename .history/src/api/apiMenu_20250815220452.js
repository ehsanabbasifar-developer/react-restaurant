import supabase from "./supabase";

export async function menuData() {
  try {
    let { data, error } = await supabase.from("menu").select("*");
    if (error) throw error;
    return { data, error };
  } catch (error) {
    console.log(error.message);
    return {data : null , error };
  }
}
