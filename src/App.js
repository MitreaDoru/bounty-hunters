
import "./index.css";
import {
  createBrowserRouter, RouterProvider,
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
    path: '/', element: <AuthHeader />, children: [

      { path: '/signin', element: <Signin /> },
      { path: '/login', element: <Login /> }
    ],
  },
  {
    path: '/', element: <HomeHeader />, children: [
      { path: '/home', element: <HomeContent /> },
      { path: '/hiring', element: <Hiring /> },
      { path: '/about', element: <About /> },
      { path: '/cars', element: <Cars /> },
      { path: '/subscription', element: <Subscription /> },
      { path: '/contact', element: <Contact /> },
      { path: '/profile', element: <Profile /> }
    ]
  },
  { path: '/home', element: <Home /> },

])

// const router = createBrowserRouter(routeDefinition)
const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
