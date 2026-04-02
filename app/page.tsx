import Hero from "./components/hero";
import Services from "./components/services";
import CompassionateCare from "./components/compassionatecare";
import Team from "./components/team";
import WhyChooseUs from "./components/whychooseus";
import FunFacts from "./components/funfacts";
import WhatWeDo from "./components/whatwedo";
import Testimonials from "./components/testimonials";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Blog from "./components/blog";
import About from "./components/about";
import Admission from "./components/admission";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pl-5 pr-5 pb-10 2xl:px-12  ">
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <WhyChooseUs/>
      <FunFacts/>
      <WhatWeDo/>
      <CompassionateCare />
      <Admission/>
      <Team />
      <FAQ />
      <Testimonials />
      <Blog/>
      <Footer />
    </main>
  );
}