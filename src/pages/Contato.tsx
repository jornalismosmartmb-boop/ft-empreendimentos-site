import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Building2, FileText, CalendarDays, Briefcase, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const companyInfo = [
  {
    icon: FileText,
    title: "CNPJ",
    items: [{ text: "49.370.903/0001-53", href: null }],
  },
  {
    icon: Building2,
    title: "Razão Social",
    items: [{ text: "Joao Adenilson Pedrosa de Melo", href: null }],
  },
  {
    icon: MapPin,
    title: "Endereço",
    items: [
      { text: "Avenida Joao Velho do Rego, 731", href: null },
      { text: "Parque Colonial", href: null },
      { text: "São Paulo - SP, 03.967-000", href: null },
      { text: "Brasil", href: null },
    ],
  },
  {
    icon: CalendarDays,
    title: "Data de Abertura",
    items: [{ text: "27/01/2023", href: null }],
  },
  {
    icon: Briefcase,
    title: "Atividade Principal",
    items: [
      {
        text: "Comércio varejista especializado de equipamentos e suprimentos de informática",
        href: null,
      },
    ],
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
              Consulte os principais dados da Receita Federal da empresa Leletronicos.
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
                    A empresa com razão social <strong className="text-foreground">Joao Adenilson Pedrosa de Melo</strong>
                    utiliza o nome fantasia <strong className="text-foreground">Leletronicos</strong>.
                  </p>
                  <p>
                    O CNPJ é <strong className="text-foreground">49.370.903/0001-53</strong>, com situação cadastral
                    <strong className="text-foreground"> ATIVA</strong> desde 27/01/2023.
                  </p>
                  <p>
                    A natureza jurídica é <strong className="text-foreground">Empresário (Individual) (213-5)</strong>,
                    com enquadramento de porte <strong className="text-foreground">MEI</strong> e opção pelo Simples Nacional.
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
                          <p key={idx} className="text-muted-foreground">
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
