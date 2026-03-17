import { Building2, FileText, MapPin, Briefcase } from "lucide-react";

const contactItems = [
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

export function ContactInfo() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Dados da Receita Federal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resumo Cadastral da Empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Informações principais da empresa Leletronicos com base nos dados enviados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.items.map((contactItem, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {contactItem.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
