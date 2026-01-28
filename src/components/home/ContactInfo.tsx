import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Telefone",
    items: [
      { text: "(71) 3014-6905", href: "tel:+557130146905" },
    ],
  },
  {
    icon: Mail,
    title: "E-mail",
    items: [
      { text: "procuradoria.mbassessores@gmail.com", href: "mailto:procuradoria.mbassessores@gmail.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Endereço",
    items: [
      { text: "Av. Tancredo Neves, 2539", href: null },
      { text: "Edif CEO Salvador Shopping", href: null },
      { text: "Torre Nova Iorque, Sala 805", href: null },
      { text: "Salvador – BA, 41820-021", href: null },
    ],
  },
  {
    icon: Clock,
    title: "Horário",
    items: [
      { text: "Segunda a Sexta", href: null },
      { text: "08:00 às 18:00", href: null },
    ],
  },
];

export function ContactInfo() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Entre em Contato Conosco
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos disponíveis para atender você e esclarecer todas as suas dúvidas.
          </p>
        </div>

        {/* Contact Grid */}
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
                  contactItem.href ? (
                    <a
                      key={idx}
                      href={contactItem.href}
                      className="block text-muted-foreground hover:text-accent transition-colors"
                    >
                      {contactItem.text}
                    </a>
                  ) : (
                    <p key={idx} className="text-muted-foreground">
                      {contactItem.text}
                    </p>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
