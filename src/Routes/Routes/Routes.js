import { createBrowserRouter } from "react-router-dom";
import Movies from "../../Pages/Movies/Movies";
import Main from "../../Layout/Main";
import Series from "../../Pages/Series/Series";
import Natok from "../../Pages/Natok/Natok";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Errorpage/ErrorPage";




export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/movies',
        element: <Movies></Movies>
      },
      {
        path: '/series',
        element: <Series></Series>
      },
    //   {
    //     path: '/services',
    //     loader: async () => {
    //       return fetch('https://jsonplaceholder.typicode.com/users')
    //     },
    //     element: <Services></Services>
    //   },
      {
        path: '/natok',
        element: <Natok></Natok>
      },
    ]
  }
])