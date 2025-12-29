import { Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-wb opacity-10 absolute left-10 top-1/4">WB</span>
        <span className="text-[15vw] font-black text-ozon opacity-10 absolute right-10 bottom-1/4">OZON</span>
      </div>

      {/* Floating product cards */}
      <div className="absolute left-[5%] top-1/3 w-48 h-64 bg-card/80 rounded-2xl shadow-2xl animate-float transform -rotate-12 hidden lg:flex flex-col overflow-hidden">
        <div className="bg-gradient-to-br from-accent/30 to-secondary/30 h-full flex items-center justify-center p-4">
          <div className="text-center">
            <div className="text-4xl mb-2">🎧</div>
            <p className="text-xs text-foreground font-medium">A.PODS Pro</p>
            <p className="text-[10px] text-muted-foreground">Наушники</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-1/3 w-48 h-64 bg-card/80 rounded-2xl shadow-2xl animate-float-delayed transform rotate-6 hidden lg:flex flex-col overflow-hidden">
        <div className="bg-gradient-to-br from-ozon/20 to-accent/20 h-full flex items-center justify-center p-4">
          <div className="text-center">
            <div className="text-4xl mb-2">🧴</div>
            <p className="text-xs text-foreground font-medium">ENERGY</p>
            <p className="text-[10px] text-muted-foreground">450 мл</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[15%] bottom-1/4 w-40 h-56 bg-card/80 rounded-2xl shadow-2xl animate-float-delayed transform rotate-6 hidden xl:flex flex-col overflow-hidden">
        <div className="bg-gradient-to-br from-secondary/30 to-primary/20 h-full flex items-center justify-center p-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🖤</div>
            <p className="text-xs text-foreground font-medium">ТЕРМОС</p>
            <p className="text-[10px] text-muted-foreground">с датчиком</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Дизайн карточек<br />товара для<br />
          <span className="text-wb">WB</span> и <span className="text-ozon">OZON</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          Хотите <span className="text-foreground font-medium">заказать карточку</span>?
        </p>
        <p className="text-muted-foreground mb-8">
          Напишите нам
        </p>
        
        <Button 
          asChild
          className="bg-cta hover:bg-cta-hover text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-cta/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cta/40"
        >
          <a href="https://t.me/Nkrs189" target="_blank" rel="noopener noreferrer">
            Написать
            <Send className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-8 h-8 animate-bounce-slow text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
