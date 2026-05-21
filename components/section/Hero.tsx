import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src="/images/hero.jpg"
          alt="Hero Background"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-50"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-4 text-center">
        <h1 className="font-display-lg text-display-lg text-white mb-2 max-w-3xl mx-auto md:text-display-lg sm:text-display-lg-mobile">
          Start Your Study Abroad Journey Today
        </h1>
        <p className="font-body-lg text-body-lg text-surface-variant mb-10 max-w-2xl mx-auto text-white">
          We Help You Study in Top Countries. Expert guidance for admissions,
          visas, and a successful career abroad.
        </p>
        <div className="flex flex-row gap-2 justify-center">
          <Button variant="secondary">Apply Now</Button>
          <Button variant="outline">Book Consultation</Button>
        </div>
      </div>
    </section>
  );
}
