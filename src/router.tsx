import { createBrowserRouter } from "react-router-dom";
import { Music } from "./pages/Music";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Landing } from "./pages/Landing";
import { RouteWrapper } from "./components/RouteWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteWrapper />,
    children: [
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
]);
