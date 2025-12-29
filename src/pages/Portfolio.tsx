import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import chargerImg from "@/assets/portfolio/charger.png";
import thermosImg from "@/assets/portfolio/thermos.png";
import minecraftLampImg from "@/assets/portfolio/minecraft-lamp.png";
import goproImg from "@/assets/portfolio/gopro.png";
import litEnergyImg from "@/assets/portfolio/lit-energy.png";
import airpodsImg from "@/assets/portfolio/airpods.png";

const portfolioItems = [
  {
    id: 1,
    title: "Наушники A.PODS Pro 2",
    category: "Электроника",
    platform: "WB",
    image: airpodsImg,
  },
  {
    id: 2,
    title: "Термос с датчиком",
    category: "Товары для дома",
    platform: "OZON",
    image: thermosImg,
  },
  {
    id: 3,
    title: "Ночник Minecraft",
    category: "Освещение",
    platform: "WB",
    image: minecraftLampImg,
  },
  {
    id: 4,
    title: "GoPro HERO11 Black",
    category: "Электроника",
    platform: "OZON",
    image: goproImg,
  },
  {
    id: 5,
    title: "LIT ENERGY Blueberry",
    category: "Напитки",
    platform: "WB",
    image: litEnergyImg,
  },
  {
    id: 6,
    title: "Зарядное устройство 25W",
    category: "Электроника",
    platform: "OZON",
    image: chargerImg,
  },
];

const Portfolio = () => {
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
              Наши <span className="text-wb">работы</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждый проект — это уникальное решение, созданное для увеличения продаж на маркетплейсах
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Platform Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  item.platform === "WB" 
                    ? "bg-[hsl(var(--wb-purple))] text-white" 
                    : "bg-[hsl(var(--ozon-blue))] text-white"
                }`}>
                  {item.platform}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{item.category}</p>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">
              Хотите такой же качественный дизайн для своего товара?
            </p>
            <a
              href="https://t.me/Nkrs189"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Заказать дизайн
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
