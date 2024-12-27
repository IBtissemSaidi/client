import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <div>Home page</div>, // Utilisation de JSX pour les éléments
    },
    {
      path: "/add",
      element: <div>Vache add page</div>,
    },
    {
      path: "/edit",
      element: <div>Update vache page</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
