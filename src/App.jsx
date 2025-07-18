import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact } from "./Pages/Contact";

const App = ()=> {

  const router = createBrowserRouter([
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
  ]);
    

  return <RouterProvider router={router} />
}


export default App;

