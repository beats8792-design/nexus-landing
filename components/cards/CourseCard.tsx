import Image from "next/image";
import Button from "@/components/ui/Button";

type Course = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  price: string;
  duration: string;
  link: string;
};
interface Props {
  course: Course;
}
export default function CourseCard({ course }: Props) {
  return (
    <div className="group relative rounded-2xl overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-all duration-300">
      <Image
        src={course.image}
        alt="London Tower Bridge"
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[rgb(0,10,30)]/90 to-transparent flex flex-col justify-end p-6">
        <h4 className="text-white font-headline-md text-headline-md">
          {course.title}
        </h4>
        <p className="text-white/80 font-body-sm text-body-sm mb-4">
          {course.description}
        </p>

        <div className="flex gap-2 mb-4">
          {course.price && (
            <span className="px-2 py-1 bg-sky-300/60 rounded-full text-[10px] text-white backdrop-blur-md">
              {course.price}
            </span>
          )}
          {course.duration && (
            <span className="px-2 py-1 bg-sky-300/60 rounded-full text-[10px] text-white backdrop-blur-md">
              {course.duration}
            </span>
          )}
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/20 rounded-full text-[10px] text-white backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button variant="secondary">Apply Now</Button>
      </div>
    </div>
  );
}
