import type { Course } from "../../../types/CoreTypes";
import { Link } from "react-router-dom";

import { FaBookOpen } from "react-icons/fa";

type CoursesProps = {
  courses: Course[];
};

const Courses = ({ courses }: CoursesProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <Link
          to={`/courses/${course.id}`} // Placeholder route
          key={course.id}
          className="bg-white border border-[#e7d7ba] rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300 group"
        >
          <div className="flex items-start gap-3">
            <FaBookOpen className="text-malunggay-green w-6 h-6 mt-1 group-hover:scale-110 transition" />
            <div>
              <h2 className="text-xl font-headline text-headline group-hover:text-malunggay-green-darker transition">
                {course.title}
              </h2>
              <span className="inline-block mt-1 bg-malunggay-green text-white text-xs px-3 py-1 rounded-full">
                {course.language}
              </span>
              <p className="mt-3 text-sm text-body font-body">
                {course.description}
              </p>
              <p className="mt-4 text-sm font-medium text-malunggay-green-darker">
                Tingnan ang detalye →
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Courses;
