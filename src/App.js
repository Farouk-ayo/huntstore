import "./App.css";
import Ui from "./UI/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import Menpage from "./page/Menpage";
import Womenpage from "./page/Womenpage";
import Kidspage from "./page/Kidspage";
import Cart from "./page/Cart";
import Authentication from "./page/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Ui />,
      },
      { path: "/men", element: <Menpage /> },
      { path: "/women", element: <Womenpage /> },
      { path: "/kids", element: <Kidspage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/authentication", element: <Authentication /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
