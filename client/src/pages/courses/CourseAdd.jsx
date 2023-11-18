import { Form, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedCourse = Object.fromEntries(formData);
  // console.log(preparedCourse);
  if (
    preparedCourse.instructor.trim().length <= 0 ||
    preparedCourse.title.trim().length <= 0
  ) {
    alert("Please fill in all fields");
    // return redirect(`/colleges/${params.collegeId}/majors/${params.majorId}/create-post`);
    return null;
  } else {
    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preparedCourse),
      });
      if (response.ok) {
        return redirect(`/`);
      }
      const { errors } = await response.json();
      console.log("invalid");
      return errors;
    } catch (error) {
      console.error(error);
      return "Whoops! Something went wrong";
    }
  }
}

const CourseAdd = () => {
  return (
    <Form method="post">
      <div className="flex justify-center mt-20">
        <div
          className="flex flex-col gap-10 bg-[#f0f0f0]
          rounded-lg shadow-[2px_2px_6px_rgba(0,0,0,0.90)] p-10"
        >
          <p className="text-3xl text-center">Add a New Course</p>
          <fieldset className="flex flex-col">
            <label htmlFor="title" className="">
              Course Title
            </label>
            <input
              placeholder="Course Title"
              type="text"
              name="title"
              id="title"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="instructor" className="">
              Instructor
            </label>
            <input
              placeholder="Full Name"
              type="text"
              name="instructor"
              id="instructor"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="duration" className="">
              Duration
            </label>
            <input
              placeholder="Number of weeks"
              type="text"
              name="duration"
              id="duration"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="description" className="">
              Description
            </label>
            <textarea
              placeholder="About the course"
              type="text"
              name="description"
              id="description"
              className="
              border-[1px] p-2
              min-w-[10rem]
              sm:w-[20rem] 
              md:w-[26rem]
              lg:w-[35rem]
              xl:w-[50rem]"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="rating" className="">
              Rating
            </label>
            <input
              placeholder="0-5"
              type="text"
              name="rating"
              id="rating"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="reviews" className="">
              Reviews
            </label>
            <input
              placeholder="Number of Reviews"
              type="text"
              name="reviews"
              id="reviews"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="start_date" className="">
              Start Date
            </label>
            <input
              placeholder="[Month] [Day], [Year]"
              type="text"
              name="start_date"
              id="start_date"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="end_date" className="">
              End Date
            </label>
            <input
              placeholder="[Month] [Day], [Year]"
              type="text"
              name="end_date"
              id="end_date"
              className="border-[1px] p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="cost" className="">
              Cost
            </label>
            <input
              placeholder="Dollar Amount"
              type="text"
              name="cost"
              id="cost"
              className="border-[1px] p-2"
            />
          </fieldset>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <button
          className="border-[1px] px-8 py-4 rounded-lg bg-[#2c4cff] text-white 
        hover:bg-[#b872d4] transition duration-200"
        >
          Submit Course
        </button>
      </div>
    </Form>
  );
};

export default CourseAdd;
