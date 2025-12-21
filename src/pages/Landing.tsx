import {
  LandingNav,
  Hero,
  SystemSection,
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
      <SystemSection />
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
