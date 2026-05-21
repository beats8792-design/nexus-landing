import Image from "next/image";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function AboutCard({ image, title, description }: Props) {
  return (
    <div className="bg-white p-3 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
      <div className="bg-sky-50/40 w-full p-2 mb-4 rounded-lg">
        <div className="w-24 h-24 overflow-hidden bg-surface-container rounded-lg flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
          <Image
            src={image}
            alt={title}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="font-label-md text-label-md text-primary mb-1">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
