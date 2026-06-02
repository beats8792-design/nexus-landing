"use client";
import AboutCard from "@/components/cards/AboutCard";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const aboutCards = [
  {
    image: "/images/location (1).jpg",
    title: "Visa Processing",
    description:
      "Professional guidance to ensure smooth and error-free visa applications.",
  },
  {
    image: "/images/location (2).jpg",
    title: "Japanese N4 Courses",
    description:
      "Comprehensive training programs to help you achieve your target scores.",
  },
  {
    image: "/images/location (3).jpg",
    title: "Spoken Japanese",
    description:
      "Interactive classes designed to improve fluency and confidence in Japanese.",
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
    <section className="py-6 md:py-8 lg:py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">

          {/* Images */}
          <div className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">

              {/* Chairman */}
              <div className="text-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl border border-outline-variant">
                  <Image
                    src="/images/ceo (2).jpeg"
                    alt="MOHAMMADMAHMUDUR RAHMAN"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-5 text-primary text-2xl sm:text-3xl font-headline-lg">
                  MOHAMMADMAHMUDUR RAHMAN
                </h2>

                <div className="mt-2 text-secondary text-sm md:text-base uppercase tracking-wider">
                  Chairman
                </div>

              </div>

              {/* CEO */}
              <div className="text-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl border border-outline-variant">
                  <Image
                    src="/images/ceo (1).jpeg"
                    alt="S. M. ARIF KAMAL"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-5 text-primary text-2xl sm:text-3xl font-headline-lg">
                  S. M. ARIF KAMAL
                </h2>

                <div className="mt-2 text-secondary text-sm md:text-base uppercase tracking-wider">
                  Chief Executive Officer
                  <br />
                  (Name Of Representative)
                </div>

              </div>

            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="text-sm sm:text-base leading-7 text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              NEXUS JAPANESE LANGUAGE ACADEMY is under Nexus Group. NEXUS JAPANESE LANGUAGE ACADEMY has several branches in Bangladesh. Our services include providing Japanese language education  and student consultancy. We provide Bangladeshi students with opportunities to pursue higher education abroad. Established by a team of professionals with extensive experience in overseas education, language training and international career support, the organization is committed to delivering effective and professional guidance together with internationally recognized educational solutions to help students achieve academic success overseas.
              <br />
              <br />
              NEXUS JAPANESE LANGUAGE ACADEMY is a highly professional educational consultancy organization dedicated to providing quality support and services to students throughout Bangladesh while introducing diverse educational opportunities around the world. With the goal of contributing to the improvement of educational standards, the company carefully evaluates each student’s aptitude, academic background, and career aspirations in order to assist them in selecting the most suitable universities and educational institutions.
              <br />
              <br />
              In addition, NEXUS JAPANESE LANGUAGE ACADEMY has established strong partnerships with overseas educational institutions to ensure that students are able to enroll in appropriate and reputable institutions. Through detailed profile analysis and personalized counseling sessions, we recommend the most suitable universities and academic programs, enabling students to make the best possible educational choices. NEXUS JAPANESE LANGUAGE ACADEMY provides overseas study consultancy services for multiple destination countries including Japan. 
            </p>
          </div>

          <div className="lg:col-span-12 text-center lg:text-left">
            <p className="text-sm sm:text-base leading-7 text-on-surface-variant mx-auto lg:mx-0">
              NEXUS JAPANESE LANGUAGE ACADEMY has maintained cooperative relationships with many Japanese language schools in Japan for the last several years and currently collaborates with many language schools and universities across its study destination countries.
              <br />
              <br />
              As a “one-stop solution” for overseas education in Bangladesh, NEXUS JAPANESE LANGUAGE ACADEMY offers reliable, highly regarded, professional, and ethical educational consultancy services. From university admissions procedures to visa application support, we provide comprehensive assistance for all aspects of studying abroad, enabling both students and working professionals to smoothly achieve their international education goals. Its experienced professional team and well-trained counselors carefully assist students in selecting the most suitable study destinations and academic pathways by taking into consideration their educational qualifications and professional backgrounds.
            </p>
          </div>

          <div className="lg:col-span-12">
            {/* Swiper */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
              }}
              className="team_swiper"
            >
              <SwiperSlide>
                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                  {aboutCards.map((card, index) => (
                    <AboutCard key={index} {...card} />
                  ))}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                  {aboutCards.map((card, index) => (
                    <AboutCard key={index} {...card} />
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
