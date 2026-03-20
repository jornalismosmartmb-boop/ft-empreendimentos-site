import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export function CookieBanner({ onOpenPrivacy }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground shadow-lg animate-fade-in">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-primary-foreground/90 text-center sm:text-left leading-relaxed">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade e Cookies.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onOpenPrivacy}
            className="text-sm text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
          >
            Saiba mais
          </button>
          <Button variant="gold" size="sm" onClick={handleAccept}>
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
