export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: "someone@email.com",
    password: "TuDfWICZbEbToHzlfumI",
  });
  if (error) {
    throw new Error
  }
}
