import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact } from "./Pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "movie",
          element: <Movie />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
