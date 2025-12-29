import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contacts = () => {
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
              Связаться <span className="text-primary">с нами</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Telegram Card */}
              <a
                href="https://t.me/Nkrs189"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-[hsl(var(--ozon-blue))]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--ozon-blue))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--ozon-blue))]/20 transition-colors">
                    <Send className="w-6 h-6 text-[hsl(var(--ozon-blue))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Telegram</h3>
                    <p className="text-muted-foreground">@Nkrs189</p>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+375298925266"
                className="block p-6 rounded-2xl bg-card border border-border/50 hover:border-[hsl(var(--wb-purple))]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--wb-purple))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--wb-purple))]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[hsl(var(--wb-purple))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Телефон</h3>
                    <p className="text-muted-foreground">+375 29 892-52-66</p>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Локация</h3>
                    <p className="text-muted-foreground">Беларусь, работаем удаленно</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Время работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-muted-foreground text-sm">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[hsl(var(--wb-purple))]/20 via-background to-[hsl(var(--ozon-blue))]/20 border border-border/50">
                <MessageCircle className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Готовы увеличить продажи?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Напишите нам в Telegram для быстрой консультации. Мы ответим в течение 30 минут в рабочее время и обсудим ваш проект.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Бесплатная консультация",
                    "Анализ ваших текущих карточек",
                    "Индивидуальное КП под ваш бюджет",
                    "Примеры работ в вашей нише",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/Nkrs189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-full justify-center"
                >
                  <Send className="w-5 h-5" />
                  Написать в Telegram
                </a>
              </div>

              {/* Response Time */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Среднее время ответа: <span className="text-foreground font-semibold">15 минут</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
