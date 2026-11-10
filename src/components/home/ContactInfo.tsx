import { Building2, FileText, MapPin, Briefcase, Phone, Mail } from "lucide-react";
import { company } from "@/lib/company";

const contactItems = [
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
            Informações principais da empresa {company.legalName} com base nos dados oficiais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p key={idx} className="text-muted-foreground break-words">
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
