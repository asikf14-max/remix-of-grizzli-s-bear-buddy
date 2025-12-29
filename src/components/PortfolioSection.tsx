const PortfolioSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Хочешь чтобы твои продажи увеличивались?
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Посмотри какие работы мы делаем
        </p>

        {/* Portfolio showcase placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-[3/4] bg-gradient-to-br from-accent/20 via-secondary/20 to-ozon/20 rounded-xl overflow-hidden relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <span className="text-foreground text-sm font-medium">Пример работы {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
