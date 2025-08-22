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
    autoRefreshToken: false,       
    persistSession: false جلوگیری از ذخیره session در localStorage
  }
);
