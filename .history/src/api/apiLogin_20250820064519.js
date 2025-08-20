import { supabase } from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    em
    password: "TuDfWICZbEbToHzlfumI",
  });
  if (error) {
    throw new Error(error);
  }
  console.log(data);

  return data;
}
