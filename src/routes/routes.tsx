import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import App from "../App";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import TopicsPage from "../pages/TopicsPage/TopicsPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import QuestionPage from "../pages/QuestionPage/QuestionPage";
import ResultPage from "../pages/ResultPage/ResultPage";
import FollowersPage from "../pages/FollowersPage/FollowersPage";
import FollowingPage from "../pages/FollowingPage/FollowingPage";
import AdminPage from "../pages/AdminPage/AdminPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path:'', element:<ProfilePage></ProfilePage>},
            {path:'login', element:<LoginPage></LoginPage>},
            {path:'reg', element:<RegistrationPage></RegistrationPage>},
            {path:'myprofile', element:<ProfilePage></ProfilePage>},
            {path:'topics', element:<TopicsPage></TopicsPage>},
            {path:'settings', element:<SettingsPage></SettingsPage>},
            {path: 'test', element:<QuestionPage></QuestionPage>},
            {path: 'result', element:<ResultPage></ResultPage>},
            {path: 'followers', element:<FollowersPage></FollowersPage>},
            {path: 'following', element:<FollowingPage></FollowingPage>},
            {path: 'admin', element:<AdminPage></AdminPage>},
        ]
    }
])