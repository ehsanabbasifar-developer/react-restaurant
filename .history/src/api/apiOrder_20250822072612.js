import { supabase } from './supabaseClient'; // مسیر فایل supabaseClient خودت

export async function insertOrder() {
  try {
    const user = supabase.auth.user();
    if (!user) throw new Error('کاربر لاگین نیست!');

    const { data, error } = await supabase
      .from('orders')
      .insert([
        { user_id: user.id }
      ])
      .select(); // انتخاب سطر جدید برای بازگشت

    if (error) throw error;

    console.log('سطر جدید Insert شد:', data);
    return data;
  } catch (err) {
    console.error('خطا در insertOrder:', err);
    return null;
  }
}
