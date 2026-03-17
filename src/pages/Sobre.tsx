import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Building2, CalendarDays, FileText, Briefcase, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Building2,
    title: "Nome Fantasia",
    description: "Leletronicos.",
  },
  {
    icon: FileText,
    title: "Razão Social",
    description: "Joao Adenilson Pedrosa de Melo.",
  },
  {
    icon: CalendarDays,
    title: "Abertura",
    description: "27/01/2023.",
  },
  {
    icon: Briefcase,
    title: "Natureza Jurídica",
    description: "Empresário (Individual) (213-5).",
  },
];

const milestones = [
  { year: "2023", event: "Abertura da empresa em 27/01/2023" },
  { year: "2023", event: "Enquadramento como MEI" },
  { year: "2023", event: "Opção pelo Simples Nacional desde 27/01/2023" },
  { year: "Atual", event: "Situação cadastral ATIVA" },
];

const Sobre = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Sobre a Empresa
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Perfil Cadastral
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Conheça os principais dados oficiais da empresa Leletronicos enviados por você.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Resumo da Empresa
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A empresa <strong className="text-foreground">Joao Adenilson Pedrosa de Melo</strong> opera com o nome fantasia
                  <strong className="text-foreground"> Leletronicos</strong> e está registrada sob o CNPJ 49.370.903/0001-53.
                </p>
                <p>
                  Sua sede está localizada na Avenida Joao Velho do Rego, 731, bairro Parque Colonial,
                  São Paulo - SP, CEP 03.967-000, Brasil.
                </p>
                <p>
                  A atividade principal informada é o comércio varejista especializado de equipamentos e suprimentos de informática,
                  conforme CNAE G-4751-2/01.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-center">
                <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <span className="text-accent-foreground font-display font-bold text-4xl">LE</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-2">
                  Capital Social
                </h3>
                <p className="text-primary-foreground/80 text-lg">
                  R$ 25.000,00
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <p className="font-display text-2xl font-bold text-accent">MEI</p>
                    <p className="text-sm text-primary-foreground/80">Enquadramento</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <p className="font-display text-2xl font-bold text-accent">ATIVA</p>
                    <p className="text-sm text-primary-foreground/80">Situação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Informações Principais
              </h2>
              <p className="text-muted-foreground text-lg">
                Os dados centrais do cadastro empresarial exibidos de forma resumida.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Linha do Tempo
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-12 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-muted/50 rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ver Dados Completos
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Acesse a página de informações para consultar o resumo completo da empresa.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/informacoes">
                Ir para Informações
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
