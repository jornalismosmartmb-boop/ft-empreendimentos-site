import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calculator,
  FileCheck,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Atividade Principal",
    description: "Comércio varejista especializado de equipamentos e suprimentos de informática.",
  },
  {
    icon: Calculator,
    title: "Porte da Empresa",
    description: "Enquadramento como MEI, conforme dados informados da Receita Federal.",
  },
  {
    icon: FileCheck,
    title: "Regime Tributário",
    description: "Optante pelo Simples Nacional desde 27/01/2023.",
  },
  {
    icon: TrendingUp,
    title: "Situação Cadastral",
    description: "Empresa em situação ATIVA desde a data de abertura.",
  },
  {
    icon: Shield,
    title: "Natureza Jurídica",
    description: "Empresário (Individual) sob o código 213-5.",
  },
  {
    icon: Users,
    title: "Tipo de Unidade",
    description: "MATRIZ localizada em São Paulo - SP.",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Resumo Empresarial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Principais Dados da Empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja os dados mais importantes da empresa conforme as informações da Receita Federal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated p-6 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/servicos">
              Ver Resumo Completo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
