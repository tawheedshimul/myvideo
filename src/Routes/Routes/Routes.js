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
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";




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
        element: <PrivateRoutes><Movies></Movies></PrivateRoutes>
      },
      {
        path: '/series',
        element: <PrivateRoutes><Series></Series></PrivateRoutes>
      },
      {
        path: '/Songs',
        element: <PrivateRoutes><Songs></Songs></PrivateRoutes>
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