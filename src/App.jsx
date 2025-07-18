import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact } from "./Pages/Contact";

const App = ()=> {

  {/*const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/movie",
      element:<Movie/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]);*/}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      </>
    )
  );

  return <RouterProvider router={router} />
}


export default App;

