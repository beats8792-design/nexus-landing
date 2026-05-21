import { Brain, Globe, Heart, User } from "lucide-react";
import React from "react";

const choices = [
  {
    icon: User,
    title: "Certified Experts",
    description:
      "Our consultants are certified professionals with deep knowledge of international education laws and university requirements.",
  },
  {
    icon: Globe,
    title: "Worldwide Network",
    description:
      "We have a global network of partners and clients in over 100 countries, enabling us to offer services to clients in the world.",
  },
  {
    icon: Brain,
    title: "Personalized Approach",
    description:
      "We take a personalized approach to each client, ensuring that we meet their unique needs and goals.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description:
      "We are committed to customer satisfaction and success, and we work to ensure that our clients are happy with the results of our services.",
  },
];

export default function Choose() {
  return (
    <section className="py-20 container mx-auto px-4 bg-surface-container-low">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Why Choose GlobalPath?
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Commitment to excellence and your future success is at the heart of
          everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {choices.map((choice) => (
          <div
            key={choice.title}
            className="bg-white p-8 rounded-2xl border border-outline-variant flex items-start gap-6 hover:shadow-md transition-all"
          >
            <div className="w-16 h-16 bg-sky-500/20 text-on-primary-container rounded-2xl shrink-0 flex items-center justify-center">
              <choice.icon />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {choice.title}
              </h3>
              <p className="text-on-surface-variant font-body-sm">
                {choice.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
