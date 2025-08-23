import { supabase } from "./supabase";

export async function apiSignup({
  fullName,
  email,
  password,
  address,
  city,
  phone,
}) {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password,
      options: {
        data: {
          fullName,
          address,
          city,
          phone,
        },
      },
    },
    {
      persistSession: false,  //   از    
    }
  );

  if (error) throw new Error(error.message);

  return data;
}
