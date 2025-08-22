// src/api/apiOrder.js
import { supabase } from "./supabase";

export async function insertOrder(obj) {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError) throw userError;


    const orderData = {
      user_id: user.id,
      status: "pending",
      details : {}
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
