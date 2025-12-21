import {
  LandingNav,
  Hero,
  ProductCard,
  HowItWorks,
  BenefitSection,
  FAQ,
  Footer,
} from "@/components/landing";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNav />
      <Hero />
      <ProductCard />
      <HowItWorks />
      <BenefitSection />
      <FAQ />
      <Footer />
    </div>
  );
}
