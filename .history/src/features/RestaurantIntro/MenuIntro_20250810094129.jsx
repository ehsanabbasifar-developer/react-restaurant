import React from "react";

import React from "react";

export default function MenuIntro() {
  return (
    <section>
      <div className="flex p-2 border-yellow-500 border-8 m-3">
        
        
        <img
          src="./pizza1.jpg"
          alt="image pizza"
          className="w-1/2 h-56 object-cover"
        />
        
        {/* متن */}
        <p className="w-1/2 p-2 break-words">
          در رستوران ری‌اکت اصفهان، ما فقط یک هدف داریم: پخت بهترین پیتزای
          ممکن! منوی ما شامل انواع پیتزای کلاسیک و خاص است؛ از پیتزای پپرونی
          و مارگاریتای اصیل گرفته تا ترکیب‌های خلاقانه با مواد تازه و منوی.
          خمیر دست‌ساز، پنیر کش‌دار و سس خانگی مخصوص، راز طعم منحصربه‌فرد
          پیتزای ماست. با هر اسلایس، عطر و طعمی که فراموش نخواهید کرد را
          تجربه کنید.
        </p>
        
      </div>
    </section>
  );
}

