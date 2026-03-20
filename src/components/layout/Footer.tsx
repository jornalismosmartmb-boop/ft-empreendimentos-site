import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, MapPin, Building2 } from "lucide-react";
import { LegalModal } from "@/components/legal/LegalModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/informacoes", label: "Informações" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">LE</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">
                  Leletronicos
                </h3>
                <p className="text-xs text-primary-foreground/70 tracking-wide">
                  Comércio de informática
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Nome fantasia de Joao Adenilson Pedrosa de Melo, empresa MEI ativa desde 27/01/2023,
              especializada no comércio varejista de equipamentos e suprimentos de informática.
            </p>
          </div>

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

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Dados Oficiais</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>Natureza: Empresário Individual (213-5)</li>
              <li>Situação: ATIVA</li>
              <li>Porte: MEI</li>
              <li>Simples: OPTANTE desde 27/01/2023</li>
              <li>Tipo de unidade: MATRIZ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Endereço</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <FileText className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>CNPJ 49.370.903/0001-53</span>
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Avenida Joao Velho do Rego, 731<br />
                  Parque Colonial<br />
                  São Paulo - SP, 03.967-000
                </span>
              </div>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Atividade principal: CNAE G-4751-2/01</span>
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Política de Privacidade e Cookies
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors text-left"
              >
                Termos de Uso
              </button>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p>Todos os direitos reservados.</p>
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-accent">
                  Identite é um produto de Joao Adenilson Pedrosa de Melo
                </p>
                <p className="text-base font-semibold text-accent">
                  Identité é um produto de Joao Adenilson Pedrosa de Melo
                </p>
                <p className="text-base font-semibold text-accent">
                  Identitè é um produto de Joao Adenilson Pedrosa de Melo
                </p>
              </div>
            </div>
            <p className="text-xs">CNPJ: 49.370.903/0001-53</p>
          </div>
        </div>
      </div>

      {/* Modais Legais */}
      <LegalModal open={privacyOpen} onOpenChange={setPrivacyOpen} title="Política de Privacidade e Cookies">
        <p>
          A <strong>Joao Adenilson Pedrosa de Melo</strong> observa a Lei Geral de Proteção de Dados (LGPD). Coletamos apenas dados estritamente necessários para atendimento e cumprimento de obrigações legais. Seus dados são tratados com segurança e confidencialidade.
        </p>
        <h3 className="text-foreground font-semibold text-base">Cookies Essenciais</h3>
        <p>
          Necessários para o funcionamento básico do site, como preferências de sessão e consentimento de cookies.
        </p>
        <h3 className="text-foreground font-semibold text-base">Cookies de Análise</h3>
        <p>
          Utilizamos ferramentas como o Meta Pixel para entender como os visitantes interagem com o site, permitindo melhorias contínuas na experiência do usuário.
        </p>
        <h3 className="text-foreground font-semibold text-base">Como Desativar</h3>
        <p>
          Você pode configurar seu navegador para bloquear cookies ou limpar os cookies armazenados a qualquer momento nas configurações de privacidade.
        </p>
      </LegalModal>

      <LegalModal open={termsOpen} onOpenChange={setTermsOpen} title="Termos de Uso">
        <p>
          Ao utilizar este site, você concorda com estes Termos de Uso. As informações apresentadas são indicativas e podem ser atualizadas sem aviso prévio. Reservamo-nos o direito de modificar estes termos a qualquer momento.
        </p>
      </LegalModal>
    </footer>
  );
}
