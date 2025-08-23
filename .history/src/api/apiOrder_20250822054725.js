export async function insertOrder() {
  const { data: user } = await supabase.auth.getUser();
  if (!user) throw new Error("کاربر لاگین نیست");

  const { data, error } = await su.from("orders").insert([{}]).select();
  if (error) throw error;
  return data;
}
