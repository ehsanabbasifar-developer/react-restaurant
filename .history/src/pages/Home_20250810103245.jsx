import React from "react";
import AppLayout from "../layout/AppLayout";
import Main from "../layout/Main";
import IntroLayout from "../layout/IntroLayout";

export default function Home() {
  return (
    <AppLayout>
      <Main>
        <>
          <IntroLayout
            buttonMessage={"مشاهده منو"}
            description={`در رستوران ری‌اکت اصفهان، ما فقط یک هدف داریم: پخت بهترین پیتزای ممکن!
منوی ما شامل انواع پیتزاهای کلاسیک و خاص است؛ از پیتزای پپرونی و مارگاریتای اصیل گرفته تا ترکیب‌های خلاقانه با مواد تازه و منوی.
خمیر دست‌ساز، پنیر کش‌دار و سس خانگی مخصوص، راز طعم منحصربه‌فرد پیتزاهای ماست.
با هر اسلایس، عطر و طعمی که فراموش نخواهید کرد را تجربه کنید.`}
            img={"./pizza1.jpg"}
          />
          >
        </>
      </Main>
    </AppLayout>
  );
}
