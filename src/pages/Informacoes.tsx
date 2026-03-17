import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileCheck,
  HelpCircle,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Qual é o CNPJ da empresa?",
    answer: "O CNPJ informado é 49.370.903/0001-53.",
  },
  {
    question: "Qual é a razão social?",
    answer: "A razão social é Joao Adenilson Pedrosa de Melo.",
  },
  {
    question: "Qual é o nome fantasia?",
    answer: "O nome fantasia informado é Leletronicos.",
  },
  {
    question: "Qual é a situação cadastral?",
    answer: "A situação cadastral está ATIVA desde 27/01/2023.",
  },
  {
    question: "Qual é o enquadramento da empresa?",
    answer: "A empresa está enquadrada como MEI e também consta como optante pelo Simples Nacional desde 27/01/2023.",
  },
  {
    question: "Onde fica a sede?",
    answer: "A sede está na Avenida Joao Velho do Rego, 731, Parque Colonial, São Paulo - SP, CEP 03.967-000.",
  },
];

const documents = [
  {
    title: "Dados de Registro",
    items: [
      "CNPJ: 49.370.903/0001-53",
      "Razão Social: Joao Adenilson Pedrosa de Melo",
      "Nome Fantasia: Leletronicos",
      "Data de abertura: 27/01/2023",
    ],
  },
  {
    title: "Enquadramento",
    items: [
      "Natureza Jurídica: Empresário (Individual) (213-5)",
      "Situação: ATIVA",
      "Tipo de unidade: MATRIZ",
      "Porte: MEI",
    ],
  },
  {
    title: "Tributação e Capital",
    items: [
      "Capital social: R$ 25.000,00",
      "Opção pelo MEI: Sim",
      "Optante pelo Simples: OPTANTE",
      "Data da opção pelo Simples: 27/01/2023",
    ],
  },
];

const Informacoes = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Informações
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Dados da Receita Federal
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Resumo completo com as informações empresariais enviadas para a Leletronicos.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Confira os principais dados cadastrais em formato de perguntas e respostas.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto mb-20">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elevated p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Resumo Detalhado
              </h2>
              <p className="text-muted-foreground text-lg">
                Consulte os principais blocos de dados da empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="card-elevated p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    {doc.title}
                  </h3>
                  <ul className="space-y-2">
                    {doc.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-muted/50 rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Situação Atual
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A empresa está ativa, enquadrada como MEI, optante pelo Simples Nacional e sem situação especial disponível.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="font-medium text-foreground">Situação</span>
                      <span className="text-accent font-semibold">ATIVA</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="font-medium text-foreground">MEI</span>
                      <span className="text-accent font-semibold">Sim</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Simples Nacional</span>
                      <span className="text-accent font-semibold">OPTANTE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ver Endereço e Perfil
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Navegue para a página sobre para revisar o perfil cadastral resumido da empresa.
            </p>
            <Button asChild variant="gold" size="lg">
              <Link to="/sobre">
                Ir para Sobre
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Informacoes;
