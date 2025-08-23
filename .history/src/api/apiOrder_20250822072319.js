import { supabase } from "./supabase";

export async function insertOrder() {
  try {
    // گرفتن کاربر لاگین شده
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("ابتدا باید وارد حساب شوید");
    }

    // داده‌ای که می‌خوایم insert کنیم
    const orderData = {
      user_id: user.id, // مهم: user_id باید با auth.uid() مطابقت داشته باشه
    };

    // insert کردن رکورد جدید در جدول orders
    const { data, error } = await supabase
      .from("orders")
      .insert([orderData])
      .select();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("خطا در insertOrder:", err);
    throw err;
  }
}
