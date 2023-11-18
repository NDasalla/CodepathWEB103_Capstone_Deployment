import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const courseResponse = await fetch(`
  /api/courses/${params.courseId}
  `);
  const course = await courseResponse.json();
  return { course };
}

const CourseView = () => {
  const { course } = useLoaderData();
  // const creator = data[0];
  console.log(course);

  return (
    <div className="mx-10 flex justify-center items-center h-screen">
      <div className="">
        <div
          className="max-w-4xl px-5 py-5 bg-[#f0f0f0]
          rounded-lg shadow-[2px_2px_6px_rgba(0,0,0,0.90)]
          flex
          "
        >
          <div className="">
            <div className="">
              <Link to={`/courses/${course.id}/edit`} className="">
                <button
                  className="border-[1px] bg-[#2c4cff] hover:bg-[#b872d4] transition duration-200 
                text-white text-center px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
              </Link>
            </div>
            <div className="py-10 capitalize">
              <p className="mb-4 text-4xl font-bold text-center">
                {course.title}
              </p>
              <p className="mx-32 pt-2">Instructor: {course.instructor}</p>
              <p className="mx-32 pt-2">Duration: {course.duration}</p>
              <p className="mx-32 pt-2 normal-case">
                Description: {course.description}
              </p>
              <p className="mx-32 pt-2">Rating: {course.rating}</p>
              <p className="mx-32 pt-2">Reviews: {course.reviews}</p>
              <p className="mx-32 pt-2">Cost: {course.cost}</p>
              <p className="mx-32 pt-2">Start Date: {course.start_date}</p>
              <p className="mx-32 pt-2">End Date: {course.end_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
