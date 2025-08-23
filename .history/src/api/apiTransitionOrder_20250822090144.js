import { supabase } from "./supabase";

export async function TransitionOrder(userId) {
 
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")   
      .eq("user_id", userId);     

    if (error) throw new Error(error.message);

    return orders;
  
  
}
