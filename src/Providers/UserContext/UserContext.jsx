import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(null);

    const [isLoadingLogin, setIsLoadingLogin] = useState(false);
    const [isLoadingRegister, setIsLoadingRegister] = useState(false);
    const [isLoadingPage, setIsLoadingPage] = useState(true);

    const navigate = useNavigate();

    async function getUser() {
        const token = localStorage.getItem("@KenzieHub: token");

        if (!token) {
            setIsLoadingPage(false);
            return;
        }

        try {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            const response = await api.get("/profile");
            setUser(response.data);
        } catch (error) {
            localStorage.removeItem("@KenzieHub: token");
            localStorage.removeItem("@KenzieHub: userId");

            toast.error("Acesso não autorizado!");
        } finally {
            setIsLoadingPage(false);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    async function requestLogin(data) {
        setIsLoadingLogin(true);

        try {
            const response = await api.post("/sessions", data);

            toast.success("Login efetuado com sucesso!");

            setUser(response.data.user);

            localStorage.setItem("@KenzieHub: token", response.data.token);
            localStorage.setItem("@KenzieHub: userId", response.data.user.id);

            setIsLoadingPage(false);

            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${localStorage.getItem("@KenzieHub: token")}`;
            navigate("/dashboard");
        } catch (error) {
            const { message } = error.response.data;

            message.toLowerCase().includes("incorrect")
                ? toast.error("E-mail ou senha incorretos")
                : toast.error("Algo deu errado!");
        } finally {
            setIsLoadingLogin(false);
        }
    }

    async function requestRegister(data) {
        setIsLoadingRegister(true);

        try {
            await api.post("/users", data);
            toast.success("Cadastro realizado con sucesso!");
            navigate("/");
        } catch (error) {
            const { message } = error.response.data;

            message.toLowerCase().includes("already")
                ? toast.error("Email já cadastrado!")
                : toast.error("Algo eu errado!");
        } finally {
            setIsLoadingRegister(false);
        }
    }

    function handleLogout() {
        localStorage.removeItem("@KenzieHub: token");
        localStorage.removeItem("@KenzieHub: userId");

        setUser(null);
        navigate("/");
    }

    return (
        <UserContext.Provider
            value={{
                showPassword,
                setShowPassword,
                requestLogin,
                user,
                isLoadingLogin,
                requestRegister,
                isLoadingRegister,
                handleLogout,
                isLoadingPage,
                getUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
