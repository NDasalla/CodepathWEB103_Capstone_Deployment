import {
  Form,
  redirect,
  useLoaderData,
  useActionData,
  useFetcher,
} from "react-router-dom";
// import { supabase } from "../../client";

export async function loader({ params }) {
  const courseResponse = await fetch(`
    /api/courses/${params.courseId}
    `);
  const course = await courseResponse.json();
  return { course };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedCourse = Object.fromEntries(formData);
  // console.log(preparedCreator);
  const response = await fetch(`/api/courses/${params.courseId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedCourse),
  });

  if (response.ok) {
    return redirect(`/courses/${params.courseId}`);
  } else {
    const { errors } = await response.json();
    return errors;
  }
}

const CourseEdit = () => {
  const { course } = useLoaderData();
  //   const course = data[0];
  const fetcher = useFetcher();

  return (
    <div className="">
      <div className="">
        <Form method="post">
          <div className="flex justify-center mt-20">
            <div
              className="flex flex-col gap-10 bg-[#f0f0f0]
          rounded-lg shadow-[2px_2px_6px_rgba(0,0,0,0.90)] p-10"
            >
              <p className="text-3xl text-center">Edit Course</p>
              <fieldset className="flex flex-col">
                <label htmlFor="title" className="">
                  Course Title
                </label>
                <input
                  defaultValue={course.title}
                  placeholder=""
                  type="text"
                  name="title"
                  id="title"
                  className="border-[1px] p-2
                  min-w-[10rem]
                sm:w-[20rem] 
                md:w-[26rem]
                lg:w-[35rem]
                xl:w-[50rem]"
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="instructor" className="">
                  Instructor
                </label>
                <input
                  defaultValue={course.instructor}
                  placeholder=""
                  type="text"
                  name="instructor"
                  id="instructor"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="duration" className="">
                  Duration
                </label>
                <input
                  defaultValue={course.duration}
                  placeholder=""
                  type="text"
                  name="duration"
                  id="duration"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="description" className="">
                  Description
                </label>
                <textarea
                  defaultValue={course.description}
                  placeholder=""
                  type="text"
                  name="description"
                  id="description"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="rating" className="">
                  Rating
                </label>
                <input
                  defaultValue={course.rating}
                  placeholder=""
                  type="text"
                  name="rating"
                  id="rating"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="reviews" className="">
                  Reviews
                </label>
                <input
                  defaultValue={course.reviews}
                  placeholder=""
                  type="text"
                  name="reviews"
                  id="reviews"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="start_date" className="">
                  Start Date
                </label>
                <input
                  defaultValue={course.start_date}
                  placeholder=""
                  type="text"
                  name="start_date"
                  id="start_date"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="end_date" className="">
                  End Date
                </label>
                <input
                  defaultValue={course.end_date}
                  placeholder=""
                  type="text"
                  name="end_date"
                  id="end_date"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="cost" className="">
                  Cost
                </label>
                <input
                  defaultValue={course.cost}
                  placeholder=""
                  type="text"
                  name="cost"
                  id="cost"
                  className="border-[1px] p-2
                    "
                />
              </fieldset>
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-10">
            <button
              className="border-[1px] px-8 py-4 rounded-lg bg-[#2c4cff] text-white 
        hover:bg-[#b872d4] transition duration-200"
            >
              Submit Changes
            </button>
          </div>
        </Form>
        <div className="flex justify-center mb-20">
          <div className="">
            <fetcher.Form
              method="delete"
              action={`/courses/${course.id}/delete`}
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button
                className="border-[1px] px-8 py-4 rounded-lg bg-[#ff2c2c] text-white"
                type="submit"
              >
                Delete Course
              </button>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEdit;
