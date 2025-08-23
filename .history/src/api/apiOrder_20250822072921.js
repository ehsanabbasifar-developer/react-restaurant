// apiOrder.js
import { supabase } from "./supabase";

export async function insertOrder(user_id) {
  try {
    // در نسخه جدید:
    const {
      data: { user },
    } = await supabase.auth.getUser(); // <-- این جایگزین supabase.auth.user() شده

    console.log("کاربر لاگین شده:", user);

    const { data, error } = await supabase
      .from("orders")
      .insert([{ user_id: user.id }]);

    if (error) {
      console.error("خطا در insertOrder:", error);
      return { error };
    }

    console.log("داده اضافه شد:", data);
    return { data };
  } catch (err) {
    console.error("خطا در insertOrder:", err);
    return { error: err };
  }
}
