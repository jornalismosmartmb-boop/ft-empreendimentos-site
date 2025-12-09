import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Calculator, 
  FileCheck, 
  TrendingUp, 
  Shield, 
  Users,
  FileText,
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Consultoria Empresarial",
    description: "Análise estratégica e planejamento personalizado para otimizar processos, reduzir custos e impulsionar o crescimento do seu negócio.",
    features: [
      "Diagnóstico empresarial completo",
      "Planejamento estratégico",
      "Reestruturação organizacional",
      "Análise de viabilidade de projetos",
    ],
  },
  {
    icon: Calculator,
    title: "Contabilidade",
    description: "Gestão contábil completa com foco em conformidade fiscal, relatórios precisos e suporte para tomada de decisões estratégicas.",
    features: [
      "Escrituração contábil",
      "Elaboração de balanços",
      "Demonstrações financeiras",
      "Análise de indicadores",
    ],
  },
  {
    icon: FileCheck,
    title: "Certificação Digital",
    description: "Emissão e renovação de certificados digitais para pessoas físicas e jurídicas, incluindo Tite Certificado, Tite Certificadora e Certificado Tite.",
    features: [
      "e-CPF e e-CNPJ",
      "Certificado A1 e A3",
      "NF-e e CT-e",
      "Renovação e suporte técnico",
    ],
  },
  {
    icon: TrendingUp,
    title: "Assessoria Fiscal",
    description: "Orientação tributária especializada para redução de custos, planejamento fiscal e cumprimento de todas as obrigações fiscais.",
    features: [
      "Planejamento tributário",
      "Apuração de impostos",
      "Obrigações acessórias",
      "Recuperação de créditos",
    ],
  },
  {
    icon: Building2,
    title: "Regularização de Empresas",
    description: "Abertura, alteração e encerramento de empresas com agilidade, segurança e total conformidade legal.",
    features: [
      "Abertura de empresas",
      "Alterações contratuais",
      "Encerramento de CNPJ",
      "Regularização cadastral",
    ],
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Gestão completa de folha de pagamento, admissões, demissões e cumprimento de todas as obrigações trabalhistas.",
    features: [
      "Folha de pagamento",
      "Admissões e demissões",
      "eSocial e FGTS Digital",
      "Férias e 13º salário",
    ],
  },
  {
    icon: Shield,
    title: "Legalização",
    description: "Serviços de legalização junto a órgãos públicos, obtenção de licenças e alvarás para funcionamento regular.",
    features: [
      "Alvarás de funcionamento",
      "Licenças ambientais",
      "Vigilância sanitária",
      "Corpo de bombeiros",
    ],
  },
  {
    icon: FileText,
    title: "Assessoria Contábil",
    description: "Suporte contábil contínuo para acompanhamento da saúde financeira e orientação em decisões estratégicas.",
    features: [
      "Acompanhamento mensal",
      "Relatórios gerenciais",
      "Orientação financeira",
      "Suporte a decisões",
    ],
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Nossos Serviços
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Soluções Completas para Seu Negócio
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Oferecemos uma gama completa de serviços empresariais para atender todas as necessidades da sua empresa com excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-elevated p-6 sm:p-8 grid md:grid-cols-3 gap-6"
              >
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:border-l md:border-border md:pl-6">
                  <h4 className="font-semibold text-foreground mb-3">Inclui:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Precisa de Ajuda para Escolher?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nossa equipe está pronta para entender suas necessidades e indicar a melhor solução para o seu negócio.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
