import { Search, Type, Camera, FileText, Settings, Target, Sliders, HeadphonesIcon, Palette, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Анализ рынка и конкурентов",
      description: "Мы проведем подробное исследование рынка и целевой аудитории, проанализируем карточки конкурентов, чтобы определить наиболее эффективные подходы и подчеркнуть ваши уникальные преимущества.",
    },
    {
      icon: Type,
      title: "Создание привлекательных названий товаров",
      description: "Разработаем SEO-оптимизированные названия, которые легко находят в поисковых системах и привлекают внимание покупателей.",
    },
    {
      icon: Camera,
      title: "Разработка высококачественных фотографий и визуальных материалов",
      description: "Предоставим профессиональные фотографии товара с разных ракурсов, снимки в контексте использования, а также создадим инфографику и видеоролики для более яркой презентации продукта.",
    },
    {
      icon: FileText,
      title: "Написание уникальных и информативных описаний",
      description: "Создадим оригинальные описания, выделяющие преимущества вашего товара, включающие ключевые слова для повышения видимости и описывающие все важные характеристики.",
    },
    {
      icon: Settings,
      title: "Создание и оформление технических характеристик",
      description: "Обеспечим заполнение разделов с актуальной и точной технической информацией, чтобы повысить доверие и информативность карточки.",
    },
    {
      icon: Target,
      title: "Разработка продающих преимуществ и УТП",
      description: "Поможем сформулировать, почему ваш товар — лучший выбор, и создадим убедительные призывы к действию, способствующие увеличению конверсий.",
    },
    {
      icon: Sliders,
      title: "Оптимизация для маркетплейсов",
      description: "Проведем настройку метатегов, тегов и структурных элементов, а также подготовим вариации товара (цвет, размер и т.д.), чтобы повысить его видимость и привлекательность.",
    },
    {
      icon: HeadphonesIcon,
      title: "Поддержка и сопровождение",
      description: "Мы будем регулярно обновлять и корректировать карточки, отслеживать их эффективность и проводить A/B-тесты для повышения продаж.",
    },
    {
      icon: Palette,
      title: "Профессиональный дизайн и оформление",
      description: "Используем ваш фирменный стиль и создаем яркие баннеры, привлекательные изображения и видеоматериалы для создания целостного и запоминающегося визуала.",
    },
    {
      icon: GraduationCap,
      title: "Обучение и консультации",
      description: "Предоставляем рекомендации по использованию созданных карточек и маркетинговым стратегиям для достижения максимальной отдачи.",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">1. Что предлагает наша компания?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            2. Наша компания предлагает профессиональную разработку карточек товаров "под ключ"
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            полный комплекс услуг для достижения наилучших результатов и увеличения ваших продаж.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
