// src/api/apiOrder.js
import { supabase } from './';

export async function insertOrder() {
  try {
    // گرفتن کاربر لاگین شده
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;

    console.log('کاربر لاگین شده:', user);

    // داده‌ای که میخوای insert کنی
    const orderData = {
      user_id: user.id,
      // سایر فیلدهای سفارش را اضافه کن
    };
    console.log('داده برای insert:', orderData);

    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select();

    if (error) throw error;

    console.log('سفارش ثبت شد:', data);
    return data;
  } catch (err) {
    console.error('خطا در insertOrder:', err);
    throw err;
  }
}
