import bearLogo from "@/assets/bear-logo.png";

const Header = () => {
  const navItems = [
    { label: "Главная", href: "#hero" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            GrizzliDesign
          </span>
          <img 
            src={bearLogo} 
            alt="GrizzliDesign Bear Logo" 
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
