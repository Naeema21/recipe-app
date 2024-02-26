import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import RecipeDetails from "./path/RecipeDetails";
import AddRecipe from "./path/AddRecipe";
import Recipe from "./path/Recipe";
import Navbar from "./component/navbar";
 
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Recipe /> },
      { path: "/:id/:title", element: <RecipeDetails /> },
      { path: "/add-recipe", element: <AddRecipe /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
