import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/informacoes", label: "Informações" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center shadow-elegant group-hover:shadow-gold transition-shadow duration-300">
              <span className="text-primary-foreground font-display font-bold text-xl">LE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg text-foreground leading-tight">
                Leletronicos
              </h1>
              <div className="text-xs text-accent font-medium tracking-wide space-y-0.5">
                <p>Razão Social: Joao Adenilson Pedrosa de Melo</p>
                <p>MEI • CNPJ 49.370.903/0001-53</p>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "text-accent bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>São Paulo • SP</span>
            </div>
            <Button asChild variant="gold" size="sm">
              <Link to="/informacoes">Ver Dados</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="border-t border-accent/20 bg-gradient-gold/10 py-3">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Identitè é um produto de João Adenilson Pedrosa de Melo
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Identité é um produto de João Adenilson Pedrosa de Melo
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Identite é um produto de João Adenilson Pedrosa de Melo
            </p>
          </div>
        </div>

        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                    location.pathname === link.href
                      ? "text-accent bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Button asChild variant="gold" className="w-full">
                  <Link to="/informacoes" onClick={() => setIsOpen(false)}>
                    Ver Dados
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
