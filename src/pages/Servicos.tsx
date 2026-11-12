import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Phone,
  FileCheck,
  TrendingUp,
  Shield,
  Users,
  FileText,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { company } from "@/lib/company";

const services = [
  {
    icon: Briefcase,
    title: "Atividade Principal",
    description: `${company.mainActivity}.`,
    features: [
      `CNAE ${company.cnae}`,
      "Edição de cadastros, listas e outros produtos gráficos",
      "Reparação e manutenção de computadores e periféricos",
      `Empresa sediada em ${company.cityState}`,
    ],
  },
  {
    icon: Phone,
    title: "Contato",
    description: "Telefone e e-mail informados no cadastro oficial.",
    features: [
      `Telefone: ${company.phone}`,
      `E-mail: ${company.email}`,
      "Canal de atendimento da empresa",
      "Dados do cartão CNPJ",
    ],
  },
  {
    icon: FileCheck,
    title: "Dados de Registro",
    description: "CNPJ e data de abertura conforme Receita Federal.",
    features: [
      `CNPJ ${company.cnpj}`,
      `Abertura em ${company.openingDate}`,
      `Nome empresarial ${company.legalName}`,
      `Situação cadastral ${company.situation}`,
    ],
  },
  {
    icon: TrendingUp,
    title: "Porte da Empresa",
    description: "Empresa classificada como ME (Microempresa).",
    features: [
      `Porte: ${company.size}`,
      "Sociedade Empresária Limitada",
      "Natureza jurídica 206-2",
      `Situação cadastral ${company.situation}`,
    ],
  },
  {
    icon: Building2,
    title: "Estrutura Empresarial",
    description: "Empresa cadastrada como matriz.",
    features: [
      "Tipo de unidade: MATRIZ",
      "Natureza jurídica 206-2",
      "Sociedade Empresária Limitada",
      "Sem situação especial disponível",
    ],
  },
  {
    icon: Users,
    title: "Situação Cadastral",
    description: `Empresa ${company.situation} desde ${company.situationSince}.`,
    features: [
      `Situação: ${company.situation}`,
      `Desde ${company.situationSince}`,
      "Sem situação especial",
      "Dados oficiais resumidos",
    ],
  },
  {
    icon: Shield,
    title: "Localização",
    description: `Sede registrada em ${company.cityState}.`,
    features: [
      company.address.street,
      `Bairro ${company.address.district}`,
      `CEP ${company.address.zip}`,
      `${company.address.city} - ${company.address.state}, Brasil`,
    ],
  },
  {
    icon: FileText,
    title: "Resumo Legal",
    description: "Conjunto de informações cadastrais exibidas na aplicação.",
    features: [
      "Nome empresarial completo",
      "CNPJ e abertura",
      "Atividade principal e CNAE",
      "Endereço e contato",
    ],
  },
];

const Servicos = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Resumo Empresarial
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Dados Estruturados da Empresa
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Visualize os principais blocos de informação empresarial de {company.legalName}.
            </p>
          </div>
        </div>
      </section>

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

          <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ver Dados Completos
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Consulte a página de informações para acessar o resumo detalhado da Receita Federal.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/informacoes">
                Abrir Informações
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
