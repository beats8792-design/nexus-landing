import Image from "next/image";
import AboutCard from "@/components/cards/AboutCard";

const aboutCards = [
  {
    image: "/images/location (1).jpg",
    title: "Visa Processing",
    description:
      "Professional guidance to ensure smooth and error-free visa applications.",
  },
  {
    image: "/images/location (2).jpg",
    title: "IELTS / TOEFL Coaching",
    description:
      "Comprehensive training programs to help you achieve your target scores.",
  },
  {
    image: "/images/location (3).jpg",
    title: "Spoken English",
    description:
      "Interactive classes designed to improve fluency and confidence in English.",
  },
  {
    image: "/images/location (4).jpg",
    title: "Mock Tests",
    description:
      "Practice exams that simulate real test environments for better preparation.",
  },
  {
    image: "/images/location (2).jpg",
    title: "University Admission",
    description:
      "Step-by-step assistance in selecting and applying to top universities abroad.",
  },
  {
    image: "/images/location (1).jpg",
    title: "Career Counseling",
    description:
      "Personalized advice to help you choose the right study and career path.",
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-20 px-4 container mx-auto">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Image */}
        <div className="relative group lg:col-span-5">
          <div className="absolute -inset-2 bg-secondary/10 rounded-2xl blur-2xl group-hover:bg-secondary/20 transition-all"></div>

          <Image
            src="/images/ceo.jpg"
            alt="Counselor helping student"
            width={600}
            height={400}
            className="relative z-10 rounded-xl shadow-xl w-full h-auto object-cover border border-outline-variant"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-7">
          <span className="text-secondary font-label-md text-label-md tracking-wider">
            Founder & CEO
          </span>

          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-4 md:mb-6">
            Mr. Mohammad Ali Khan
          </h2>

          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mb-8 md:mb-10 leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptas.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
            {aboutCards.map((card, index) => (
              <AboutCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}