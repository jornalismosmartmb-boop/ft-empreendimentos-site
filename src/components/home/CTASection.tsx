import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container-narrow mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para <span className="text-accent">Crescer</span>?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-10 leading-relaxed">
            Nossa equipe está pronta para oferecer a melhor solução para sua empresa. 
            Entre em contato e descubra como podemos ajudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/contato">
                Fale Conosco
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
            <a
              href="tel:+5571991898703"
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(71) 99189-8703</span>
            </a>
            <a
              href="mailto:publicitedson@gmail.com"
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>publicitedson@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
