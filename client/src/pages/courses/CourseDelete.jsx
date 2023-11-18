import { redirect } from "react-router-dom";

export async function action({ params }) {
  console.log(params);
  const { error } = await fetch(`/api/courses/${params.courseId}`, {
    method: "DELETE",
  });
  // return null;
  return redirect(`/`);
}
