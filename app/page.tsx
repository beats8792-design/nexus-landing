import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/section/About";
import Choose from "@/components/section/Choose";
import Course from "@/components/section/Course";
import Faq from "@/components/section/Faq";
import Hero from "@/components/section/Hero";
import Team from "@/components/section/Team";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Course />
      <Team />
      <Choose />
      <Faq />
      <Footer />
    </>
  );
}
