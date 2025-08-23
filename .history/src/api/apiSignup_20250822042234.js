export async function signup({ fullName, email, password , address,city, }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}