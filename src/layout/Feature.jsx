export default function Feature () {
    return (
           <section className="py-16 px-4 sm:px-16 bg-white text-center">
            <h2 className="text-3xl font-bold  text-red-600 text-center mb- border-b-2 border-orange-400 inline-block pb-1 mx-auto block">
                چرا پیتزا ری‌اکت؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                
                {/* Feature 1 */}
                <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="text-4xl text-orange-500 mb-4">⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">کیفیت درجه یک</h3>
                    <p className="text-gray-600">از تازه‌ترین مواد اولیه محلی استفاده می‌کنیم تا بهترین و لذیذترین مزه‌ها را برای شما خلق کنیم. کیفیت برای ما یک تعهد است.</p>
                </div>
                
                {/* Feature 2 */}
                <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="text-4xl text-orange-500 mb-4">🚀</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">سرویس‌دهی سریع</h3>
                    <p className="text-gray-600">با تیم مجرب و سیستم سفارش‌گیری پیشرفته، غذای شما در کمترین زمان ممکن آماده و سرو می‌شود. منتظر نخواهید ماند!</p>
                </div>
                
                {/* Feature 3 */}
                <div className="p-6 border rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="text-4xl text-orange-500 mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">فضای دلنشین</h3>
                    <p className="text-gray-600">محیط رستوران ما با طراحی مدرن و نورپردازی گرم، مکانی عالی برای دورهمی‌های خانوادگی و دوستانه است.</p>
                </div>
            </div>
        </section>
    )
}
