import { useContext } from "react";
import { isEmpty} from "lodash";
import { UserContext } from "../../Contexts/UserContext";
import { Navigate } from "react-router";
import LoginPage from "../../Pages/LoginPage";

export const LoginRedirect = () => {
    const {user} = useContext(UserContext)

    if(!isEmpty(user)) {
        return <Navigate to="/" replace/>
    }

    return <LoginPage/> 
}