import { useState, useEffect } from "react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "день" },
    { value: timeLeft.hours, label: "часов" },
    { value: timeLeft.minutes, label: "минут" },
    { value: timeLeft.seconds, label: "секунд" },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-accent/10 via-secondary/10 to-ozon/10">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-cta text-primary-foreground px-6 py-2 rounded-full text-sm font-bold mb-6">
          Скидка на заказ в 50%
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Не упусти свой шанс заказать дизайн карточки пока действует скидка!
        </h2>

        <div className="flex justify-center gap-4 md:gap-8 mb-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border rounded-xl flex items-center justify-center mb-2">
                <span className="text-2xl md:text-4xl font-bold text-foreground">
                  {unit.value}
                </span>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
