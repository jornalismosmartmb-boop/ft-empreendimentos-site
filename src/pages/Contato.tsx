import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Building2, FileText, CalendarDays, Briefcase, Send, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { company } from "@/lib/company";

const companyInfo = [
  {
    icon: FileText,
    title: "CNPJ",
    items: [{ text: company.cnpj }],
  },
  {
    icon: Building2,
    title: "Nome Empresarial",
    items: [{ text: company.legalName }],
  },
  {
    icon: MapPin,
    title: "Endereço",
    items: [
      { text: company.address.street },
      { text: company.address.district },
      { text: `${company.address.city} - ${company.address.state}, ${company.address.zip}` },
      { text: company.address.country },
    ],
  },
  {
    icon: CalendarDays,
    title: "Data de Abertura",
    items: [{ text: company.openingDate }],
  },
  {
    icon: Briefcase,
    title: "Atividade Principal",
    items: [{ text: company.mainActivity }],
  },
  {
    icon: Phone,
    title: "Telefone",
    items: [{ text: company.phone }],
  },
  {
    icon: Mail,
    title: "E-mail",
    items: [{ text: company.email }],
  },
];

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Dados enviados",
      description: "Os dados preenchidos foram registrados apenas nesta interface demonstrativa.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Dados da Empresa
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Informações Cadastrais
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Consulte os principais dados da Receita Federal da empresa {company.legalName}.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card-elevated p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Resumo Informativo
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    A empresa <strong className="text-foreground">{company.legalName}</strong> está
                    registrada sob o CNPJ <strong className="text-foreground">{company.cnpj}</strong>,
                    com situação cadastral
                    <strong className="text-foreground"> {company.situation}</strong> desde {company.situationSince}.
                  </p>
                  <p>
                    A natureza jurídica é <strong className="text-foreground">Sociedade Empresária Limitada (206-2)</strong>,
                    com enquadramento de porte <strong className="text-foreground">{company.sizeLabel}</strong>.
                  </p>
                  <p>
                    A atividade principal é <strong className="text-foreground">{company.mainActivity}</strong>,
                    conforme CNAE {company.cnae}, com sede em {company.cityState}.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Observação</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Anote aqui qualquer observação sobre os dados exibidos"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                    <Send className="w-5 h-5" />
                    Registrar Observação
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              {companyInfo.map((item, index) => (
                <div key={index} className="card-elevated p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1">
                        {item.items.map((companyItem, idx) => (
                          <p key={idx} className="text-muted-foreground break-words">
                            {companyItem.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
