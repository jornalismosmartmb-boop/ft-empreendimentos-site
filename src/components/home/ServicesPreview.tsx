import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Calculator, 
  FileCheck, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Consultoria Empresarial",
    description: "Análise estratégica e planejamento para otimizar processos e impulsionar resultados.",
  },
  {
    icon: Calculator,
    title: "Contabilidade",
    description: "Gestão contábil completa com foco em conformidade fiscal e tomada de decisões.",
  },
  {
    icon: FileCheck,
    title: "Certificação Digital",
    description: "Emissão e renovação de certificados digitais para pessoas físicas e jurídicas.",
  },
  {
    icon: TrendingUp,
    title: "Assessoria Fiscal",
    description: "Orientação tributária para redução de custos e cumprimento das obrigações fiscais.",
  },
  {
    icon: Shield,
    title: "Regularização",
    description: "Abertura, alteração e encerramento de empresas com agilidade e segurança.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Gestão de folha de pagamento, admissões, demissões e obrigações trabalhistas.",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Soluções Completas para Seu Negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços para atender todas as necessidades da sua empresa.
          </p>
        </div>

        {/* Services Grid */}
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

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
