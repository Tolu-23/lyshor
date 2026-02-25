import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FreelanceBanner from "./components/FreelanceBanner";
import Hero from "./components/Hero";
import LyschorGroup from "./components/Lyshorgroup";
import OfferAgencies from "./components/OfferAgencies";
import PaymentInfographic from "./components/PaymentInfographics";
import PropertyShowcase from "./components/PropertyShowcase";
import RubPayment from "./components/RubPayemnt";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <FreelanceBanner />
      <About />
      <LyschorGroup />
      <RubPayment />
      <Services />
      <OfferAgencies />
      {/* <PropertyShowcase /> */}
      <PaymentInfographic />
      <ContactForm />
    </>
  );
}