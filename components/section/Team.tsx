"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamCard from "../cards/TeamCard";

export default function Team(){
  const teamMembers = Array.from({ length: 8 });

  return (
    <section className="py-20 container mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptas.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="team_swiper"
      >
        {teamMembers.map((_, index) => (
          <SwiperSlide key={index}>
            <TeamCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}