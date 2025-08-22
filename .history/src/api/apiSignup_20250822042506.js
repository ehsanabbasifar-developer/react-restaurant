export async function apisignup({
  fullName,
  email,
  password,
  address,
  city,
  phone,
}) {
  const { data, error } = await supabase.auth.signUp({
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
  });

  if (error) throw new Error(error.message);

  return data;
}
