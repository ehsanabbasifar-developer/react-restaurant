import Error from "../ui/Error";
import { supabase } from "./supabase";

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("مشکلی به وجود امده است");
}
