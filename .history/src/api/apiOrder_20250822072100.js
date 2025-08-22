// src/api/apiOrder.js
import { supabase } from "./supabase";

export async function insertOrder() {
  try {
    // ۱️⃣ گرفتن کاربر لاگین شده
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("خطا در گرفتن کاربر:", userError);
      throw new Error("خطا در احراز هویت کاربر");
    }

    console.log("کاربر لاگین شده:", user);

    if (!user) {
      throw new Error("ابتدا باید وارد حساب شوید");
    }

    // ۲️⃣ آماده کردن داده insert
    const newOrder = {
      user_id: user.id, // مهم: ستون user_id
      // سایر ستون‌ها اگر default دارند لازم نیست پر شوند
    };

    console.log("داده برای insert:", newOrder);

    // ۳️⃣ اجرای insert با await و select
    const { data, error } = await supabase
      .from("orders")
      .insert([newOrder])
      .select();

    if (error) {
      console.error("خطا هنگام insert:", error);
      throw error;
    }

    console.log("داده ثبت شده:", data);
    return data;
  } catch (err) {
    console.error("Error در insertOrder:", err);
    throw err;
  }
}
