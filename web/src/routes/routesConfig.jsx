import Homepage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

export const routesConfig = [
    {
        name:"Root",
        path:"/",
        component: <Homepage></Homepage>
    },
    {
        name:"Login",
        path:"/login",
        component: <LoginPage/>
    },
    {
        name:"All",
        path:"*",
        component: <Homepage/>
    }
]