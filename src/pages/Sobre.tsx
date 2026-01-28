import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Users, Target, TrendingUp, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Experiência",
    description: "23 anos no mercado, com conhecimento profundo em consultoria e contabilidade.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Construímos relacionamentos duradouros baseados na confiança e transparência.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Todas as nossas soluções são orientadas para gerar resultados concretos.",
  },
  {
    icon: TrendingUp,
    title: "Inovação",
    description: "Acompanhamos as tendências do mercado para oferecer soluções atualizadas.",
  },
];

const milestones = [
  { year: "2002", event: "Fundação da MODO 2 PRODUÇÕES" },
  { year: "2007", event: "Adesão ao Simples Nacional" },
  { year: "2015", event: "Parceria com grandes empresas" },
  { year: "2020", event: "Digitalização completa dos processos" },
  { year: "2025", event: "23 anos de excelência no mercado" },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Conheça a história e os valores que guiam a MODO 2 PRODUÇÕES há mais de duas décadas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">MODO 2 PRODUÇÕES</strong> é uma empresa de consultoria e contabilidade com mais de duas décadas de experiência, oferecendo soluções estratégicas para profissionais, empreendedores e empresas de todos os portes.
                </p>
                <p>
                  Atuamos com foco em consultoria empresarial, contabilidade e certificação digital. Nossa missão é ser a parceira ideal para o sucesso do seu negócio.
                </p>
                <p>
                  Com sede em Salvador, Bahia, atendemos clientes em toda a região, oferecendo serviços personalizados e de alta qualidade.
                </p>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 text-center">
                <div className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <span className="text-accent-foreground font-display font-bold text-4xl">M2</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-primary-foreground mb-2">
                  Desde 2002
                </h3>
                <p className="text-primary-foreground/80 text-lg">
                  Construindo parcerias de sucesso
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <p className="font-display text-2xl font-bold text-accent">23+</p>
                    <p className="text-sm text-primary-foreground/80">Anos de Mercado</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <p className="font-display text-2xl font-bold text-accent">500+</p>
                    <p className="text-sm text-primary-foreground/80">Clientes Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-muted-foreground text-lg">
                Os princípios que norteiam nossa atuação e garantem a excelência em todos os serviços.
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

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nossa Trajetória
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

          {/* CTA */}
          <div className="text-center bg-muted/50 rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Entre em contato e descubra como podemos ajudar sua empresa a crescer.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/contato">
                Fale Conosco
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
