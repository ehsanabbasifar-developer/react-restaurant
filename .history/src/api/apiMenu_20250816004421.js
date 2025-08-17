import {supabase} from "./supabase";

export async function menuData() {
  try {
    let { data, error } = await supabase.from("menuس").select("*ن");
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
}
