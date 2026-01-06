import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Mais de duas décadas de experiência no mercado",
  "Soluções estratégicas personalizadas",
  "Atendimento para empresas de todos os portes",
  "Foco em resultados e crescimento",
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Sua Parceira em Soluções Empresariais
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Modo 2 Producoes LTDA é uma empresa de produção de eventos com mais de duas décadas de experiência, oferecendo soluções estratégicas para profissionais, empreendedores e empresas de todos os portes. Atuamos com foco em serviços de organização de feiras, congressos, exposições e festas.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="default" size="lg">
              <Link to="/sobre">
                Saiba Mais Sobre Nós
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg">
              <div className="aspect-[4/3] bg-gradient-hero flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 shadow-gold">
                    <span className="text-accent-foreground font-display font-bold text-4xl">M2</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    23 Anos
                  </h3>
                  <p className="text-primary-foreground/80">
                    Transformando negócios
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elegant-lg border border-border/50 max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Confiança</p>
                  <p className="text-sm text-muted-foreground">Atuando desde 2002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
