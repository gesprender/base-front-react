import { createHashRouter } from "react-router-dom";
import NotFound from "./Pages/404/404";
import SEO from "./layout/Seo";
import Home from "./pages/Home/Home";

const router = createHashRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <SEO
          Component={<Home />}
          useLayout={false}
        />
      },
      {
        path: "*",
        element: <SEO
          Component={<NotFound />}
          useLayout={false}
        />
      },
    ],
  }
]);

export default router;