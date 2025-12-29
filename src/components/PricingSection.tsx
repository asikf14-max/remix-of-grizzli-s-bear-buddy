import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const features = [
    "Дизайн карточек согласно предоставленному ТЗ клиента",
    "Быстрые сроки выполнения",
    "Индивидуальный подход к каждому проекту",
    "Высокое качество и внимание к деталям",
    "Внесение корректировки по вашему вкусу",
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Стоимость и детали
        </h2>

        <div className="max-w-lg mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />

            <div className="relative">
              <p className="text-muted-foreground mb-2">
                Дизайн карточки товара за 1 слайд
              </p>
              <p className="text-xs text-primary font-medium mb-4">
                (С УЧЕТОМ СКИДКИ В 50%)
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold text-foreground">15</span>
                <span className="text-2xl font-bold text-foreground">BYN</span>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className="w-full bg-cta hover:bg-cta-hover text-primary-foreground py-6 text-lg font-semibold rounded-xl"
              >
                <a href="https://t.me/Nkrs189" target="_blank" rel="noopener noreferrer">
                  Заказать
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
