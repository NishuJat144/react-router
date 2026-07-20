import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";

const App = () => {

  // * Create Route using Helper function 
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
      <>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/movie" element = {<Movie/>} />
        <Route path="/contact" element = {<Contact/>} />
      </>
      // </Route>
    )
  )
  
    // * Create Route 
    // const router = createBrowserRouter([
    //   {
    //     path : "/" ,
    //     element : <Home/>
    //   },
    //   {
    //     path : '/about',
    //     element : <About/>
    //   },
    //   {
    //     path:"/contact",
    //     element : <Contact/>
    //   },
    //   {
    //     path :"/movie",
    //     element : <Movie/>
    //   },
    // ]
    // )
  
  return <RouterProvider router={router}/>;
}
export default App ;