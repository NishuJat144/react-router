// import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import "./App.css"
const App = () => {

   // * Create Route 
    const router = createBrowserRouter([
      {
        path : "/",
        element : <AppLayout/>,
        children :[
         {
           path : "/" ,
           element : <Home/>
         },
        {
          path : '/about',
          element : <About/>
        },
        {
         path:"/contact",
         element : <Contact/>
        },
        {
         path :"/movie",
         element : <Movie/>
        },
       ]
      }]
    )
     return <RouterProvider router={router}/>;
}

export default App ;



    
  // * Create Route using Helper function 
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //      <Route>
  //     <>
  //       <Route path="/" element = {<Home/>} />
  //       <Route path="/about" element = {<About/>} />
  //       <Route path="/movie" element = {<Movie/>} />
  //       <Route path="/contact" element = {<Contact/>} />
  //     </>
  //      </Route>
  //   )
  // )
  
 
