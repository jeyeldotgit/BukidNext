import Navbar from "../../components/core/General/Navbar";
import PageHeader from "../../components/core/General/PageHeader";

import Courses from "../../components/core/Learning/Courses";
import type { Course } from "../../types/CoreTypes";

const courses: Course[] = [
  {
    id: 1,
    title: "Pagtatanim ng Malunggay",
    language: "Tagalog",
    description:
      "Alamin ang tamang paraan ng pagtatanim at pag-aalaga ng malunggay.",
  },
  {
    id: 2,
    title: "Pagpanguma sa Mais",
    language: "Cebuano",
    description: "Mga lokal nga teknik sa pagtanum og mais.",
  },
  {
    id: 3,
    title: "Organic Farming Basics",
    language: "English",
    description: "Learn the basics of organic farming practices and soil care.",
  },
];

const LearningPage = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-[#FAF3E0] px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <PageHeader
            header=" Mga Kurso sa Pagsasaka"
            description="Piliin ang kurso upang makita ang mga aralin, babasahin, at mga
            video para sa bawat paksa."
          />

          <Courses courses={courses} />
        </div>
      </section>
    </div>
  );
};

export default LearningPage;
