import { AddPost, FullPost, Home, Login } from "../pages";
import AboutMuseum from "../pages/AboutMuseum";
import Exposure from "../pages/Exposure";
import Contact from "../pages/Contact";

import { LINKS } from "../helpers/links";

const routes = [
  {
    path: LINKS.home,
    element: <Home />
  },
  {
    path: LINKS.fullPost,
    element: <FullPost />
  },
  {
    path: LINKS.editPost,
    element: <AddPost />
  },
  {
    path: LINKS.addPost,
    element: <AddPost />
  },
  {
    path: LINKS.login,
    element: <Login />,
  },
  {
    path: LINKS.about,
    element: <AboutMuseum />
  },
  {
    path: LINKS.exposure,
    element: <Exposure />
  },
  {
    path: LINKS.contact,
    element: <Contact />
  },
]

export default routes
