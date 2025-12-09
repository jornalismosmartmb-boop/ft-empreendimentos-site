import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/informacoes", label: "Informações" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">FT</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">
                  FT Empreendimentos
                </h3>
                <p className="text-xs text-primary-foreground/70 tracking-wide">
                  Consultoria & Contabilidade
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Soluções empresariais com 19 anos de experiência para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Serviços</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>Consultoria Empresarial</li>
              <li>Contabilidade</li>
              <li>Certificação Digital</li>
              <li>Assessoria Fiscal</li>
              <li>Gestão Financeira</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+5571991898703"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(71) 99189-8703</span>
              </a>
              <a
                href="tel:+5571984199209"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(71) 98419-9209</span>
              </a>
              <a
                href="mailto:publicitedson@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>publicitedson@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Praça Dona Rosa Prates, 273<br />
                  Caculezinho — Caculé – BA<br />
                  CEP: 46300-000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 FT Empreendimentos LTDA. Todos os direitos reservados.</p>
            <p className="text-xs">CNPJ: 07.757.581/0001-50</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
