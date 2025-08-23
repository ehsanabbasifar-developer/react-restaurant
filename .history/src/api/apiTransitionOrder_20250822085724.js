import { supabase } from "./supabase";

export async function TransitionOrder() {
  let { data: orders, error } = await supabase
    .from("orders")
    .select("some_column,other_column");
    if (error) {
        throw err
    }
}
