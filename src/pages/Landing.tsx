import {
  LandingNav,
  Hero,
  SupplementsSection,
  PlatformSection,
  SmartRingSection,
  ProductCard,
  HowItWorks,
  FAQ,
  Footer,
  GradientBanner,
  AppShowcase,
  Testimonials,
} from "@/components/landing";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <Hero />
      {/* 1. Suplementos - O produto base */}
      <SupplementsSection />
      {/* 2. Plataforma - Como mensuramos via relatos */}
      <PlatformSection />
      {/* 3. Smart Ring - Dados precisos, ciclo completo */}
      <SmartRingSection />
      {/* 4. Visualização do App/Ring integrado */}
      <AppShowcase />
      {/* 5. Pacotes/Ofertas */}
      <ProductCard />
      <GradientBanner variant="newsletter" />
      <HowItWorks />
      <Testimonials />
      <GradientBanner variant="info" />
      <GradientBanner variant="cta" />
      <FAQ />
      <Footer />
    </div>
  );
}
