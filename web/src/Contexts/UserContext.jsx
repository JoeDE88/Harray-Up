import { createContext, useEffect, useState } from "react";
import { postLogin, postLogout, postRegister } from "../calls";
import { baseURL } from "../calls";

export const UserContext = createContext({
    user: {},
    login: () => { },
    logout: () => { },
    register: () => { }
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [csrfToken, setCsrfToken] = useState(null);

    const fetchUser = async (baseUrl) => {
        try {
            const response = await fetch(`${baseUrl}/me`, {
                method: "GET",
                credentials: "include", // Enviar cookies (JWT)
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                setUser(null); // No hay sesión activa
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            setUser(null);
        }
    };

    // Cargar usuario cuando la app inicia
    useEffect(() => {
        fetchUser(baseURL);
    }, [baseURL]);

    const login = (email, password, navigate) => {
        postLogin(email, password).then((data) => {
            setUser(data.user);
            setCsrfToken(data.csrf_token); 
            navigate("/");
        })
    }

    const logout = () => {
        postLogout().then(() => {
            setUser({});
            setCsrfToken(null)
        });
    }

    const register = (email, password) => {
        postRegister(email, password).then(() => {
            login(email, password);
        });
    };

    return (
        <UserContext.Provider value={{ user, login, logout, register,csrfToken }}>
            {children}
        </UserContext.Provider>

    )
}