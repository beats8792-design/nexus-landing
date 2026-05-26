import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/section/About";
import Choose from "@/components/section/Choose";
import Course from "@/components/section/Course";
import Faq from "@/components/section/Faq";
import Hero from "@/components/section/Hero";
import Team from "@/components/section/Team";
import Contact from "@/components/section/Contact";
import Branch from "@/components/section/Branch";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-headline-lg text-primary mt-12">
        NEXUS JAPANESE LANGUAGE ACADEMY
      </h2>
      <About />
      {/* <Course /> */}
      {/* <Team /> */}
      {/* <Choose /> */}
      {/* <Faq /> */}
      <Contact />
      <Branch />
      {/* <Footer /> */}
    </>
  );
}
