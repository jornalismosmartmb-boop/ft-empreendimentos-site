import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Award, text: "19 anos de experiência" },
  { icon: Users, text: "Atendimento personalizado" },
  { icon: Target, text: "Soluções estratégicas" },
  { icon: TrendingUp, text: "Compromisso com resultados" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-narrow mx-auto section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Consultoria & Contabilidade desde 2006</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            Soluções Empresariais com{" "}
            <span className="text-accent">19 Anos</span> de Experiência
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-1">
            Consultoria, contabilidade e certificação digital — incluindo a marca{" "}
            <strong className="text-accent">Identité</strong> — para impulsionar o crescimento do seu negócio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-2">
            <Button asChild variant="hero" size="lg">
              <Link to="/servicos">
                Nossos Serviços
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-delay-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <item.icon className="w-6 h-6 text-accent" />
                <span className="text-sm font-medium text-center">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
