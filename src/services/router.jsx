import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import HomePage from "../pages/homePage/HomePage";
import Connexion from "../pages/connectionPage/Connexion";
import Inscription from "../pages/connectionPage/Inscription";
import ListeTournois from "../pages/tournoisPage/ListeTournois";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "connexion",
                element: <Connexion/>
            },
            {
                path: "inscription",
                element: <Inscription/>
            },
            {
                path: "listeTournois",
                element: <ListeTournois/>
            }
        ]
    }
]);

export default router;