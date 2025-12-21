import {
  LandingNav,
  Hero,
  SupplementsSection,
  SystemSection,
  PremiumShowcase,
  ProductCard,
  HowItWorks,
  BenefitSection,
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
      <SupplementsSection />
      <SystemSection />
      <PremiumShowcase />
      <AppShowcase />
      <ProductCard />
      <GradientBanner variant="newsletter" />
      <HowItWorks />
      <Testimonials />
      <GradientBanner variant="info" />
      <BenefitSection />
      <GradientBanner variant="cta" />
      <FAQ />
      <Footer />
    </div>
  );
}
