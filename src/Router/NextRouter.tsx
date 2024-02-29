import { createBrowserRouter } from "react-router-dom";
import TeacherLayout from "../NextSuperAdmin/components/layout/TeacherLayout";
import DashboardDisplay from "../NextSuperAdmin/siderRoutePages/DashboardDisplay";
import TotalSchools from "../NextSuperAdmin/siderRoutePages/TotalSchools";
import TotalStudents from "../NextSuperAdmin/siderRoutePages/TotalStudents";
import Finances from "../NextSuperAdmin/siderRoutePages/Finances";
import Feedbacks from "../NextSuperAdmin/siderRoutePages/Feedbacks";
import Reports from "../NextSuperAdmin/siderRoutePages/Reports";
import Settings from "../NextSuperAdmin/siderRoutePages/Settings";

export const NextRouter = createBrowserRouter([
  {
    path: "/",
    element: <TeacherLayout />,
    children: [
      {
        path: "main-dashboard",
        element: <DashboardDisplay />,
      },
      {
        path: "total-schools",
        element: <TotalSchools />,
      },
      {
        path: "total-students",
        element: <TotalStudents />,
      },
      {
        path: "finances",
        element: <Finances />,
      },
      {
        path: "feedbacks",
        element: <Feedbacks />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
