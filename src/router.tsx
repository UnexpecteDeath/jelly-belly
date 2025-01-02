import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Beans from "./pages/Beans";
import Facts from "./pages/Facts";
import Recipies from "./pages/Recipes";
import Bean from "./pages/BeanPage";
import Recipe from "./pages/Recipe";
import NotFound from "./components/notFound";
import Combinations from "./pages/combinations";
import History from "./pages/History";
import About from "./pages/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: '*', element: <NotFound />},
            {path: 'bean/:id', element: <Bean />},
            {path: 'beans', element: <Beans />},
            {path: 'facts', element: <Facts />},
            {path: 'recipies', element: <Recipies />},
            {path: 'recipe/:id', element: <Recipe />},
            {path: 'combinations', element: <Combinations />},
            {path: 'history', element: <History />},
            {path: 'about', element: <About />},
        ]
    }
])