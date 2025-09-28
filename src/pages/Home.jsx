
import React from "react";
import AppLayout from "../layout/AppLayout";
import Main from "../layout/Main";
import IntroLayout from "../layout/IntroLayout";
import Feature from "../layout/Feature";

export default function Home() {
  return (
    <AppLayout>
      <Main>
        
        <div className="text-center pt-12 bg-white text-gray-800">
            <h1 className="text-5xl sm:text-6xl font-black text-red-600 mb-3 tracking-wider">
                پیتزا ری‌اکت 🍕
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
                طعم اصیل ایتالیایی با چاشنی ایرانی
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 py-10 px-4 sm:px-8 bg-gray-50">
          
          <IntroLayout
            buttonMessage={"مشاهده منو"}
            description={`در رستوران ری‌اکت اصفهان، ما فقط یک هدف داریم: پخت بهترین پیتزای ممکن!
منوی ما شامل انواع پیتزاهای کلاسیک و خاص است؛ از پیتزای پپرونی و مارگاریتای اصیل گرفته تا ترکیب‌های خلاقانه با مواد تازه و منحصربه‌فرد.
خمیر دست‌ساز، پنیر کش‌دار و سس خانگی مخصوص، راز طعم پیتزاهای ماست.
با هر اسلایس، عطر و طعمی که فراموش نخواهید کرد را تجربه کنید.`}
            img={"./pizza1.jpg"}
            path = {"/menu"}
          />
          
          <IntroLayout
            buttonMessage={"ورود/ثبت نام"}
            description={`در رستوران ری‌اکت اصفهان، کیفیت و رضایت شما اولویت ماست. محیطی تمیز و لوکس فراهم کرده‌ایم تا تجربه‌ای بی‌نظیر از صرف غذا داشته باشید. 
تیم حرفه‌ای ما سرویس‌دهی سریع را تضمین می‌کند، تا زمان انتظار شما به حداقل ممکن رسیده و بدون دغدغه از طعم لذیذ پیتزای ما لذت ببرید. 
رضایت شما، انگیزه ماست!`}
            img={"./pizza3.jpg"}
            path={"/signup"}
          />
        </div>

     <Feature/>

        <section className="py-12 px-4 sm:px-8 bg-red-50 text-center">
            <p className="text-2xl font-semibold text-gray-700">
                "هر اسلایس، یک تجربه جدید از عشق و هنر آشپزی است."
            </p>
            <p className="text-lg mt-2 text-red-500 font-bold">
                ری‌اکت: پیتزا با طعم تخصص
            </p>
        </section>

      </Main>
    </AppLayout>
  );
}
