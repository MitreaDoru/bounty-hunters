
import "./index.css";
import {
  createBrowserRouter, Router, RouterProvider,
  // Route,
  // createRoutesFromElements, 
} from 'react-router-dom'
import Signin from './pages/Signin';
import Home from './pages/Home';
import Login from "./pages/Login";
import AuthHeader from "./components/AuthHeader";
import HomeHeader from "./components/HomeHeader";
import HomeContent from "./components/HomeContent";
import Hiring from "./components/Hiring";
import About from "./components/About";
import Cars from "./components/Cars";
import Subscription from "./components/Subscription";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Auth />} />
//     <Route path="/home" element={<Home />} />
//   </Route>
// );
const router = createBrowserRouter([
  {
    path: '/bounty-hunters', element: <AuthHeader />, children: [

      { path: '/bounty-hunters/signin', element: <Signin /> },
      { path: '/bounty-hunters/login', element: <Login /> }
    ],
  },
  {
    path: '/bounty-hunters/', element: <HomeHeader />, children: [
      { path: '/bounty-hunters/', element: <Home /> },
      { path: '/bounty-hunters/home', element: <HomeContent /> },
      { path: '/bounty-hunters/hiring', element: <Hiring /> },
      { path: '/bounty-hunters/about', element: <About /> },
      { path: '/bounty-hunters/cars', element: <Cars /> },
      { path: '/bounty-hunters/subscription', element: <Subscription /> },
      { path: '/bounty-hunters/contact', element: <Contact /> },
      { path: '/bounty-hunters/profile', element: <Profile /> }
    ]
  },
  // { path: '/bounty-hunters/home', element: <Home /> },

])

// const router = createBrowserRouter(routeDefinition)
const App = () => {

  return (
    <Router basename='/bounty-hunters/home'>

      <RouterProvider router={router} />
    </Router>
  );
};

export default App;
