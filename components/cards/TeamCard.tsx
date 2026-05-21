import Image from "next/image";

export default function CourseCard() {
  return (
    <div className="group relative rounded-2xl overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-all duration-300">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz-Zk4PEAucj4QFLHVvf2SnVT_BtDkdaHJd9n1Hpw9tP9T5VECh9O817v2DsZ9e0R7NlckETRze6A_vRrl4mJDGrgvizFU2DPBQGxI9-jIrENF8bBIPDeavjYqOVfMldHUF9ny3PYmYG6F9K8fwYuZuDtOXcIN3xfhVA2roLtP6pUyLS5UKA8QFM1HgMOicpWOBGYzDZ_el3L9TyMv3QvPwBsB8htyAIi-zdpDy03OqZV7X7SPz4JPWsnlowr7EM36HhcAxgYPKOR_"
        alt="London Tower Bridge"
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[rgb(0,10,30)]/90 to-transparent flex flex-col justify-end p-6">
        <h4 className="text-white font-headline-md text-headline-md">
          John Doe
        </h4>
        <p className="text-white/80 font-body-sm text-body-sm mb-4">
          Senior Researcher
        </p>
      </div>
    </div>
  );
}
