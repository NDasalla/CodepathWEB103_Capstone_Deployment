import { useContext, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Courses from "./courses/Courses";

export async function loader({ params }) {
  const courseResponse = await fetch(`
  /api/courses
  `);
  const courses = await courseResponse.json();
  return { courses };
}

const Homepage = () => {
  // const { currentUser } = useContext(AuthContext);
  const { courses } = useLoaderData();

  return (
    <div className="mt-24 items-center h-screen pb-40 mb-20">
      <p className="text-5xl mb-20 font-bold text-center">
        Welcome to DevLearnHub
      </p>
      {/* <p className="text-1xl italic mb-5">Hone your coding skills today!</p> */}
      <div className="flex items-start justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <Link to={`/addCourse`}>
              <div
                className="px-6 py-3 bg-[#2c4cff] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
                hover:bg-[#b872d4] transition duration-200 text-white text-center
                  font-bold border-b-[1px] border-[#b872d4] w-[10rem]
                  "
              >
                <p>Add New Course</p>
              </div>
            </Link>
          </div>
          <div className="max-w-7xl mx-auto">
            <Courses courses={courses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
