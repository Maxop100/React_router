import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact } from "./Pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";

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
          element: <Movie />,
          loader: async () => {
            const { GetMoviesData } = await import("./api/GetApiData");
            return GetMoviesData();
          }
        },{
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails
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
