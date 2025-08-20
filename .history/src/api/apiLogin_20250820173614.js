import { supabase } from "./supabase";

export async function loginApi({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error);
  }
  console.log(data);

  return data;
}

export async function getCurrentUser () {
  const {data :session} = await supabase.auth.getSession()
  if (!session.session) return
  const {data : user , error} = await supabase.auth.getUser()
  if (error)  throw new Error("cant find user")
    console.log(user);
  console.log(sess);
  
     
}
