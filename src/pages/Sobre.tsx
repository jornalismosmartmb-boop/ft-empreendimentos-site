import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Building2, CalendarDays, FileText, Briefcase, ArrowRight } from "lucide-react";
import { company } from "@/lib/company";

const values = [
  {
    icon: Building2,
    title: "Nome Empresarial",
    description: `${company.legalName}.`,
  },
  {
    icon: FileText,
    title: "CNPJ",
    description: `${company.cnpj}.`,
  },
  {
    icon: CalendarDays,
    title: "Abertura",
    description: `${company.openingDate}.`,
  },
  {
    icon: Briefcase,
    title: "Natureza Jurídica",
    description: "Empresário (Individual) (213-5).",
  },
];

const milestones = [
  { year: "2024", event: `Abertura da empresa em ${company.openingDate}` },
  { year: "2024", event: "Registro como Empresário (Individual)" },
  { year: "2024", event: `Enquadramento de porte ${company.size}` },
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
              Conheça os principais dados oficiais da empresa {company.legalName}.
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
                  A empresa <strong className="text-foreground">{company.legalName}</strong> está
                  registrada sob o CNPJ <strong className="text-foreground">{company.cnpj}</strong>,
                  com situação cadastral ATIVA desde {company.situationSince}.
                </p>
                <p>
                  Sua sede está localizada na {company.address.street}, bairro {company.address.district},
                  {" "}{company.address.city} - {company.address.state}, CEP {company.address.zip}, Brasil.
                </p>
                <p>
                  A atividade principal informada é <strong className="text-foreground">cabeleireiros, manicure e pedicure</strong>,
                  conforme CNAE {company.cnae}.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-center">
                <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <span className="text-accent-foreground font-display font-bold text-4xl">{company.initials}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-2">
                  Atividade Principal
                </h3>
                <p className="text-primary-foreground/80 text-lg">
                  {company.mainActivity}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <p className="font-display text-2xl font-bold text-accent">{company.size}</p>
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
