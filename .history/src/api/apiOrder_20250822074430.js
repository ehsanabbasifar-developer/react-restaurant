// src/api/apiOrder.js
import { supabase } from "./supabase";

export async function insertOrder() {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;

    console.log(user);
    
    const orderData = {
      user_id: "00000000-0000-0000-0000-000000000000",
    };

    const { data, error } = await supabase
      .from("orders")
      .insert([orderData])
      .select();

    if (error) throw error;

    return data;
  } catch (err) {
    throw err;
  }
}
