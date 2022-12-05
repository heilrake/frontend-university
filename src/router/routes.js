import { AddPost, FullPost, Home, Login } from "../pages";
import AboutMuseum from "../pages/AboutMuseum";
import Exposure from "../pages/Exposure";

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/posts/:id',
    element: <FullPost />
  },
  {
    path: '/posts/:id',
    element: <FullPost />
  },
  {
    path: '/posts/:id/edit',
    element: <AddPost />
  },
  {
    path: '/add-post',
    element: <AddPost />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <AboutMuseum />
  },
  {
    path: '/exposure',
    element: <Exposure />
  },
]

export default routes
