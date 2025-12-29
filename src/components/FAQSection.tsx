import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Что такое инфографика для карточек маркетплейсов?",
      answer:
        "Инфографика для карточек маркетплейсов — это визуальный инструмент (изображения с текстом, иконками, схемами), который кратко и наглядно доносит ключевые преимущества и характеристики товара прямо в галерее карточки, помогая покупателю быстро принять решение о покупке, а продавцу — выделиться на фоне конкурентов. Она заменяет длинные текстовые описания, делая информацию о товаре доступной за несколько секунд.",
    },
    {
      question: "Почему важно заказать дизайн карточки у профессионалов?",
      answer:
        "Профессиональный дизайн карточек важен, потому что он привлекает внимание за секунды, повышает доверие, увеличивает конверсию и продажи, снижает возвраты за счет понятной инфографики и выделяет товар среди конкурентов, превращая просто красивую картинку в мощный продающий инструмент, основанный на маркетинге и UX/UI принципах, а не просто на эстетике.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card/50"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
