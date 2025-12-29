import { Send, Phone } from "lucide-react";
import bearLogo from "@/assets/bear-logo.png";

const Footer = () => {
  return (
    <footer id="contacts" className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              GrizzliDesign
            </span>
            <img 
              src={bearLogo} 
              alt="GrizzliDesign Bear Logo" 
              className="w-10 h-10 object-contain"
            />
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/Nkrs189"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Send className="w-5 h-5" />
              <span className="text-sm">тг</span>
            </a>
            <a
              href="tel:+375298925266"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+375298925266</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GrizzliDesign. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
