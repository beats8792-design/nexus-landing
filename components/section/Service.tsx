import React from "react";

export default function Service() {
  return (
    <section className="bg-surface-container py-20 px-4">
      <div className="max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Our Comprehensive Services
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Navigating your path from preparation to departure.
        </p>
      </div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Visa Processing */}
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-secondary text-2xl">
              description
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-primary mb-1">
            Visa Processing
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Expert assistance for flawless document submission.
          </p>
        </div>

        {/* University Admission */}
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-secondary text-2xl">
              school
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-primary mb-1">
            University Admission
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Matching your profile with top-tier global institutions.
            Matching your profile with top-tier global institutions.
          </p>
        </div>

        {/* IELTS/TOEFL Guidance */}
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-secondary text-2xl">
              translate
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-primary mb-1">
            IELTS/TOEFL Guidance
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Proven strategies for higher scores in language proficiency.
          </p>
        </div>

        {/* Scholarship Assistance */}
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-secondary text-2xl">
              payments
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-primary mb-1">
            Scholarship Assistance
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Identifying funding opportunities for your education.
          </p>
        </div>

        {/* Pre-departure Support */}
        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined text-secondary text-2xl">
              flight_takeoff
            </span>
          </div>
          <h3 className="font-label-md text-label-md text-primary mb-1">
            Pre-departure Support
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Briefing on lifestyle and academic culture abroad.
          </p>
        </div>
      </div>
    </section>
  );
}
