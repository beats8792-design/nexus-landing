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
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Images */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl border border-outline-variant">
                <Image
                  src="/images/ceo (2).jpeg"
                  alt="S. M. ARIF KAMAL"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl border border-outline-variant">
                <Image
                  src="/images/ceo (1).jpeg"
                  alt="DR. HARUN OR RASHID"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 text-center lg:text-left">

            {/* CEO 1 */}
            <div className="mb-8">
              <div className="text-secondary text-sm md:text-base uppercase tracking-wider">
                <div>Founder & Chairman</div>
                <div>NEXUS JAPANESE LANGUAGE ACADEMY</div>
              </div>

              <h2 className="mt-2 text-primary text-2xl sm:text-3xl lg:text-4xl font-headline-lg">
                MOHAMMADMAHMUDUR RAHMAN
              </h2>
            </div>

            {/* CEO 2 */}
            <div className="mb-8">
              <div className="text-secondary text-sm md:text-base uppercase tracking-wider">
                <div>Chief Executive Officer</div>
                <div>NEXUS JAPANESE LANGUAGE ACADEMY</div>
              </div>

              <h2 className="mt-2 text-primary text-2xl sm:text-3xl lg:text-4xl font-headline-lg">
                S. M. ARIF KAMAL
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-7 text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptas.
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