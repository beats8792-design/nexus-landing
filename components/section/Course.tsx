import CourseCard from "../cards/CourseCard";

const courses = [
  {
    image: "/images/course (1).jpg",
    title: "IELTS Preparation Course",
    description: "Intensive IELTS training with mock tests and personalized feedback to achieve a high band score.",
    tags: ["IELTS", "English Test"],
    price: "$300",
    duration: "2 Months",
    link: "#",
  },
  {
    image: "/images/course (2).jpg",
    title: "Foundation Program",
    description: "Prepare for international education with academic skills and cultural orientation sessions.",
    tags: ["Foundation", "Abroad Study"],
    price: "$800",
    duration: "4 Months",
    link: "#",
  },
  {
    image: "/images/course (3).jpg",
    title: "TOEFL Mastery Course",
    description: "Comprehensive TOEFL coaching covering reading, writing, listening, and speaking modules.",
    tags: ["TOEFL", "Test Prep"],
    price: "$350",
    duration: "6 Weeks",
    link: "#",
  },
  {
    image: "/images/course (4).jpg",
    title: "Spoken English Pro",
    description: "Enhance your communication skills with real-life conversations and expert mentoring.",
    tags: ["Spoken English", "Communication"],
    price: "$150",
    duration: "1 Month",
    link: "#",
  },
  {
    image: "/images/course (5).jpg",
    title: "Guidance Program",
    description: "Step-by-step visa processing assistance with document review and interview preparation.",
    tags: ["Visa", "Consultancy"],
    price: "$500",
    duration: "3 Weeks",
    link: "#",
  },
  {
    image: "/images/course (6).jpg",
    title: "Admission Support",
    description: "Get expert advice on university selection, application process, and career planning.",
    tags: ["Career", "Admission"],
    price: "$200",
    duration: "2 Weeks",
    link: "#",
  },
];

export default function Course() {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Explore Our Courses
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
}
