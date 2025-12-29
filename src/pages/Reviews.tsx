import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Алексей Морозов",
    company: "ИП Морозов",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Отличная работа! Карточки товаров стали выглядеть профессионально, продажи выросли на 40% уже в первый месяц. Рекомендую всем продавцам на маркетплейсах!",
    platform: "WB",
    date: "15.12.2024",
  },
  {
    id: 2,
    name: "Екатерина Соколова",
    company: "Beauty Store",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Заказывала дизайн для линейки косметики. Результат превзошел все ожидания — инфографика понятная, визуал премиальный. Клиенты отмечают качество оформления!",
    platform: "OZON",
    date: "08.12.2024",
  },
  {
    id: 3,
    name: "Дмитрий Петров",
    company: "TechGadgets",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Работаем с GrizzliDesign уже полгода. За это время оформили более 50 карточек товаров. Всегда в срок, всегда качественно. Отдельное спасибо за креативный подход!",
    platform: "WB",
    date: "01.12.2024",
  },
  {
    id: 4,
    name: "Анна Кузнецова",
    company: "HomeStyle",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Наконец-то нашла команду, которая понимает специфику маркетплейсов. Дизайн не только красивый, но и продающий. CTR вырос в 2 раза!",
    platform: "OZON",
    date: "25.11.2024",
  },
  {
    id: 5,
    name: "Михаил Иванов",
    company: "SportLife",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Спортивные товары требуют особого подхода. Ребята учли все пожелания, добавили динамику в дизайн. Товары теперь выглядят как топовые бренды!",
    platform: "WB",
    date: "18.11.2024",
  },
  {
    id: 6,
    name: "Ольга Смирнова",
    company: "KidsWorld",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Заказывала карточки для детских товаров. Очень яркие, привлекательные, с понятной инфографикой для родителей. Дети в восторге, родители покупают!",
    platform: "OZON",
    date: "10.11.2024",
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Отзывы <span className="text-ozon">клиентов</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 200 довольных клиентов уже увеличили свои продажи с нашей помощью
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "200+", label: "Клиентов" },
              { value: "500+", label: "Карточек" },
              { value: "98%", label: "Довольных" },
              { value: "4.9", label: "Рейтинг" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border/50">
                <div className="text-3xl md:text-4xl font-bold text-gradient-wb mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-muted-foreground/20" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {review.text}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    review.platform === "WB" 
                      ? "bg-[hsl(var(--wb-purple))]/20 text-[hsl(var(--wb-purple))]" 
                      : "bg-[hsl(var(--ozon-blue))]/20 text-[hsl(var(--ozon-blue))]"
                  }`}>
                    {review.platform}
                  </span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-[hsl(var(--wb-purple))]/10 to-[hsl(var(--ozon-blue))]/10 border border-border/50"
          >
            <h2 className="text-2xl font-bold mb-4">Станьте нашим следующим успешным кейсом</h2>
            <p className="text-muted-foreground mb-6">
              Закажите дизайн карточек и увеличьте свои продажи уже сегодня
            </p>
            <a
              href="https://t.me/Nkrs189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Написать в Telegram
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
