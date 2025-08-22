// src/api/apiOrder.js
import { supabase } from './supabase';

export async function insertOrder() {
  try {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;


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
