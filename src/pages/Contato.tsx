import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefones",
    items: [
      { text: "(71) 99189-8703", href: "tel:+5571991898703" },
      { text: "(71) 98419-9209", href: "tel:+5571984199209" },
    ],
  },
  {
    icon: Mail,
    title: "E-mail",
    items: [
      { text: "publicitedson@gmail.com", href: "mailto:publicitedson@gmail.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Endereço",
    items: [
      { text: "Praça Dona Rosa Prates, 273", href: null },
      { text: "Caculezinho", href: null },
      { text: "Caculé – BA", href: null },
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

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AAssunto: ${formData.subject}%0A%0A${formData.message}%0A%0AContato: ${formData.phone} / ${formData.email}`;
    const whatsappUrl = `https://wa.me/5571991898703?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será direcionado para continuar a conversa no WhatsApp.",
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
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Contato
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-primary-foreground/85 leading-relaxed">
              Estamos prontos para ajudar sua empresa a crescer. Envie sua mensagem ou entre em contato diretamente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Ex: Abertura de empresa"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva como podemos ajudar..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6 bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-900">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Prefere o WhatsApp?</h3>
                    <p className="text-sm text-muted-foreground">Clique abaixo para falar diretamente conosco.</p>
                  </div>
                  <Button asChild variant="default" className="bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/5571991898703" target="_blank" rel="noopener noreferrer">
                      Chamar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
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
                        {item.items.map((contactItem, idx) =>
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="card-elevated overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Nossa Localização
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Praça Dona Rosa Prates, 273<br />
                      Caculé – BA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
