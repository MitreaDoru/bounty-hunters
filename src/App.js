import "./index.css";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import AuthHeader from "./components/headers/AuthHeader";
import HomeHeader from "./components/headers/HomeHeader";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from './pages/Signup';
import Subscription from "./pages/Subscription";
import ResetPassword from "./pages/ResetPassword";


const router = createBrowserRouter([
  {
    path: '/bounty-hunters', element: <AuthHeader />, children: [

      { path: '/bounty-hunters/signup', element: <Signup /> },
      { path: '/bounty-hunters/signin', element: <Signin /> },
      { path: '/bounty-hunters/resetpassword', element: <ResetPassword /> }
    ],
  },
  {
    path: '/bounty-hunters/', element: <HomeHeader />, children: [
      { path: '/bounty-hunters/', element: <Home /> },
      { path: '/bounty-hunters/hiring', element: <Hiring /> },
      { path: '/bounty-hunters/about', element: <About /> },
      { path: '/bounty-hunters/cars', element: <Cars /> },
      { path: '/bounty-hunters/subscription', element: <Subscription /> },
      { path: '/bounty-hunters/contact', element: <Contact /> },
      { path: '/bounty-hunters/profile', element: <Profile /> }
    ]
  },


])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
