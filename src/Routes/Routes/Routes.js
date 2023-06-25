import { createBrowserRouter } from "react-router-dom";
import Movies from "../../Pages/Movies/Movies";
import Main from "../../Layout/Main";
import Series from "../../Pages/Series/Series";
import Natok from "../../Pages/Natok/Natok";
import Home from "../../Pages/Home/Home/Home";
import Songs from "../../Pages/Songs/Songs";
import ErrorPage from "../../Pages/Errorpage/ErrorPage";
import LoginPage from "../../Pages/Login/LoginPage";
import SignUpPage from "../../Pages/Login/SignUpPage";
import TermsOfService from "../../Pages/Footer/TermsOfService";
import ContactUsPage from "../../Pages/Footer/ContactUsPage";




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
      {
        path: '/Songs',
        element: <Songs></Songs>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signup',
        element: <SignUpPage></SignUpPage>
      },
      {
        path: '/terms',
        element: <TermsOfService></TermsOfService>
      },
      {
        path: '/contact',
        element: <ContactUsPage></ContactUsPage>
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