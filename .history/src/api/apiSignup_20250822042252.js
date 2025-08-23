export async function signup({ fullName, email, password , address,city,phone }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        address , city , p
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}