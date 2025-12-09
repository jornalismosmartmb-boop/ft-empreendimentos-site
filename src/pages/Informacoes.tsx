import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileCheck, 
  HelpCircle, 
  Clock, 
  Shield,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const faqs = [
  {
    question: "O que é certificado digital?",
    answer: "O certificado digital é uma identidade eletrônica que permite assinar documentos digitalmente com validade jurídica, acessar sistemas do governo e realizar transações seguras online.",
  },
  {
    question: "Quais tipos de certificado vocês emitem?",
    answer: "Trabalhamos com certificados e-CPF, e-CNPJ, NF-e e CT-e, nos formatos A1 (arquivo digital) e A3 (cartão ou token). Inclui marcas como Tite Certificado, Tite Certificadora e Certificado Tite.",
  },
  {
    question: "Quanto tempo leva para abrir uma empresa?",
    answer: "O prazo varia conforme o tipo de empresa e localização, mas geralmente leva de 7 a 30 dias úteis para ter o CNPJ ativo e funcionando.",
  },
  {
    question: "Vocês atendem empresas de outros estados?",
    answer: "Sim, atendemos empresas de todo o Brasil para serviços de consultoria, certificação digital e assessoria contábil de forma remota.",
  },
  {
    question: "Como funciona o acompanhamento contábil?",
    answer: "Realizamos acompanhamento mensal com envio de relatórios, orientação sobre obrigações fiscais e suporte para tomada de decisões estratégicas.",
  },
  {
    question: "Vocês oferecem consultoria para MEI?",
    answer: "Sim, oferecemos serviços específicos para MEI, incluindo abertura, declaração anual e orientação sobre desenquadramento quando necessário.",
  },
];

const documents = [
  {
    title: "Para Abertura de Empresa",
    items: [
      "RG e CPF dos sócios",
      "Comprovante de residência atualizado",
      "Certidão de casamento (se aplicável)",
      "Contrato de locação ou documento do imóvel",
    ],
  },
  {
    title: "Para Certificado Digital PF",
    items: [
      "Documento de identificação com foto",
      "CPF",
      "Comprovante de residência",
      "Título de eleitor ou CNH",
    ],
  },
  {
    title: "Para Certificado Digital PJ",
    items: [
      "Contrato social ou estatuto",
      "CNPJ",
      "Documento do representante legal",
      "Comprovante de endereço da empresa",
    ],
  },
];

const Informacoes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Informações
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Tudo que Você Precisa Saber
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Encontre respostas para suas dúvidas e informações importantes sobre nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Confira as dúvidas mais comuns sobre nossos serviços.
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

          {/* Documents Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Documentação Necessária
              </h2>
              <p className="text-muted-foreground text-lg">
                Confira a lista de documentos necessários para cada serviço.
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

          {/* Business Hours */}
          <div className="mb-20">
            <div className="bg-muted/50 rounded-2xl p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    Horário de Atendimento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estamos disponíveis para atender você de segunda a sexta-feira, 
                    oferecendo suporte presencial e remoto para maior comodidade.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="font-medium text-foreground">Segunda a Sexta</span>
                      <span className="text-accent font-semibold">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="font-medium text-foreground">Sábado</span>
                      <span className="text-muted-foreground">Fechado</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Domingo</span>
                      <span className="text-muted-foreground">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ainda Tem Dúvidas?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Entre em contato conosco e nossa equipe terá prazer em ajudar.
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

export default Informacoes;
