import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { LegalModal } from "@/components/legal/LegalModal";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      <LegalModal open={privacyOpen} onOpenChange={setPrivacyOpen} title="Política de Privacidade e Cookies">
        <p>
          A <strong>Joao Adenilson Pedrosa de Melo</strong> observa a Lei Geral de Proteção de Dados (LGPD). Coletamos apenas dados estritamente necessários para atendimento e cumprimento de obrigações legais. Seus dados são tratados com segurança e confidencialidade.
        </p>
        <h3 className="text-foreground font-semibold text-base">Cookies Essenciais</h3>
        <p>Necessários para o funcionamento básico do site, como preferências de sessão e consentimento de cookies.</p>
        <h3 className="text-foreground font-semibold text-base">Cookies de Análise</h3>
        <p>Utilizamos ferramentas como o Meta Pixel para entender como os visitantes interagem com o site, permitindo melhorias contínuas na experiência do usuário.</p>
        <h3 className="text-foreground font-semibold text-base">Como Desativar</h3>
        <p>Você pode configurar seu navegador para bloquear cookies ou limpar os cookies armazenados a qualquer momento nas configurações de privacidade.</p>
      </LegalModal>
    </div>
  );
}
