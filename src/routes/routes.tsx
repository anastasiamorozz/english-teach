import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path:"", element:<ProfilePage></ProfilePage>},
            {path:"login", element:<LoginPage></LoginPage>},
            {path:"reg", element:<RegistrationPage></RegistrationPage>}
        ]
    }
])