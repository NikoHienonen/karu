import { createBrowserRouter } from "react-router-dom";
import { Music } from "./pages/Music";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Landing } from "./pages/Landing";
import { RouteWrapper } from "./components/RouteWrapper";
import { Heads } from "pages/Heads";
import { Empire } from "pages/Empire";
import { Predator } from "pages/Predator";
import { KaruEP } from "pages/KaruEP";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteWrapper />,
    children: [
      {
        path: "/music",
        children: [
          { path: "heads-of-the-hydra", element: <Heads /> },
          { path: "empire-of-dust", element: <Empire /> },
          { path: "predator", element: <Predator /> },
          { path: "karu-ep", element: <KaruEP /> },
          { path: "", element: <Music /> },
        ],
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
