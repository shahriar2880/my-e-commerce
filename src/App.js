import {BrowserRouter as router,RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Main from "./layout/Main";
import Pages from "./pages/Pages";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Pages></Pages>
        }
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
