import { Send, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import bearLogo from "@/assets/bear-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                GrizzliDesign
              </span>
              <img 
                src={bearLogo} 
                alt="GrizzliDesign Bear Logo" 
                className="w-10 h-10 object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Профессиональный дизайн карточек товаров для маркетплейсов
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Главная
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Портфолио
              </Link>
              <Link to="/reviews" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Отзывы
              </Link>
              <Link to="/contacts" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/Nkrs189"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Send className="w-5 h-5" />
                <span className="text-sm">@Nkrs189</span>
              </a>
              <a
                href="tel:+375298925266"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+375 29 892-52-66</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GrizzliDesign. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
