import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Homepage, { loader as homepageCourseLoader } from "./pages/Homepage";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import CourseView, { loader as courseLoader } from "./pages/courses/CourseView";
import CourseEdit, {
  loader as editCourseLoader,
  action as editCourseAction,
} from "./pages/courses/CourseEdit";
import { action as deleteCourseAction } from "./pages/courses/CourseDelete";
import CourseAdd, {
  action as courseAddAction,
} from "./pages/courses/CourseAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: homepageCourseLoader,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addCourse",
        element: <CourseAdd />,
        action: courseAddAction,
      },
      {
        path: "/courses/:courseId",
        element: <CourseView />,
        loader: courseLoader,
      },
      {
        path: "/courses/:courseId/edit",
        element: <CourseEdit />,
        loader: editCourseLoader,
        action: editCourseAction,
      },
      {
        path: "/courses/:courseId/delete",
        action: deleteCourseAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
