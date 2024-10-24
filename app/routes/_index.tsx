import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Administracion from "~/components/Administracion";
import CTA from "~/components/CTA";
import CTA2 from "~/components/CTA2";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import Presupuesto from "~/components/Presupuesto";
import Solutions from "~/components/Solutions";
import WhyUs from "~/components/WhyUs";
 
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <HeroSection />
      <Solutions />
      <WhyUs />
      <Presupuesto />
      <CTA />
      <Administracion />
      <CTA2 />
      <FAQ />
      <Footer />
       

    </main>
  );
}

