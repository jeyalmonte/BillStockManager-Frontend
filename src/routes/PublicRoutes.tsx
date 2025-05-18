import PublicLayout from "../layouts/PublicLayout";
import LoginView from "features/auth/pages/Login";
import RegisterView from "features/auth/pages/Register";


const PublicRoutes = {
  element: <PublicLayout />,
  children: [
    {
      path: "/",
      element: <LoginView />,
    },
    {
      path: "/register",
      element: <RegisterView />,
    },
  ],
};

export default PublicRoutes;
