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
        <div className="lg:col-span-6">
          <div className="flex gap-5">
            <div className="w-1/2">
              <Image
                src="/images/ceo.jpg"
                alt="Counselor helping student"
                width={600}
                height={800}
                className="w-full h-[450px] object-cover rounded-xl shadow-xl border border-outline-variant"
              />
            </div>

            <div className="w-1/2">
              <Image
                src="/images/ceo.jpg"
                alt="Counselor helping student"
                width={600}
                height={800}
                className="w-full h-[450px] object-cover rounded-xl shadow-xl border border-outline-variant"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-6">
          <span className="text-secondary font-label-md text-label-md tracking-wider">
            <div>Chief Executive Officer</div>
            <div>NEXUS JAPANESE LANGUAGE ACADEMY</div>
          </span>

          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-4 md:mb-6">
            S. M. ARIF KAMAL
          </h2>

          <span className="text-secondary font-label-md text-label-md tracking-wider">
            <div>Chief Executive Officer</div>
            <div>AIM JAPANESE LANGUAGE ACADEMY</div>
          </span>

          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-4 md:mb-6">
            DR. HARUN OR RASHID
          </h2>

          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mb-8 md:mb-10 leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptas.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                {aboutCards.map((card, index) => (
                  <AboutCard key={index} {...card} />
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                {aboutCards.map((card, index) => (
                  <AboutCard key={index} {...card} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}