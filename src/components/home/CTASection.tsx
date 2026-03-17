import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container-narrow mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Consulte os <span className="text-accent">Dados da Empresa</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
            Reunimos nesta página as principais informações cadastrais da empresa Leletronicos,
            incluindo CNPJ, endereço, enquadramento e atividade principal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/informacoes">
                Ver Informações
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <FileText className="w-4 h-4" />
              <span>CNPJ 49.370.903/0001-53</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>São Paulo - SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
