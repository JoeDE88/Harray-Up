import { createContext, useState } from "react";
import { postLogin, postLogout, postRegister } from "../calls";

export const UserContext = createContext({
    user: {},
    login: () => { },
    logout: () => { },
    register: () => { }
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const login = (email, password,navigate) => {
        postLogin(email, password).then((data) => {
            console.log("usuario creado. availableLevels:", data.user.availableLevels);
            
            setUser(data.user);
            navigate("/");
        })
    }

    const logout = () => {
        postLogout().then(() => {
            setUser({});
        });
    }

    const register = (email, password) => {
        postRegister(email, password).then(() => {
            login(email, password);
        });
    };

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>

    )
}