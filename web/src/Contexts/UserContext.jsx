import { createContext, useEffect, useState } from "react";
import { postLogin, postLogout, postRegister } from "../services/api/api";
import { baseURL } from "../services/api/api";
import { useNavigate } from "react-router";

export const UserContext = createContext({
    user: {},
    login: () => { },
    logout: () => { },
    register: () => { }
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [csrfToken, setCsrfToken] = useState(null);
    const navigate = useNavigate();

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

    const login = (username, password, navigate) => {
        postLogin(username, password).then((data) => {
            setUser(data.user);
            setCsrfToken(data.csrf_token); 
            navigate("/");
        })
        .catch((error) => {
            console.error("Error en login:", error);
        });
    }

    const logout = () => {
        postLogout().then(() => {
            setUser({});
            setCsrfToken(null)
        });
    }

    const register = (email,username, password) => {
        postRegister(email,username, password).then(() => {
            login(username, password);
        });
    };

    return (
        <UserContext.Provider value={{ user, login, logout, register,csrfToken }}>
            {children}
        </UserContext.Provider>

    )
}