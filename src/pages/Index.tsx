import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CTASection } from "@/components/home/CTASection";
import { ContactInfo } from "@/components/home/ContactInfo";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <CTASection />
      <ContactInfo />
    </Layout>
  );
};

export default Index;
