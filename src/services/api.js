import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 6000,
});

export async function requestRegister(data, navigate, setIsLoading) {
    setIsLoading(true);
    try {
        const response = await api.post("/users", data);

        if (response.status === 201) {
            toast.success("Cadastro efetuado com sucesso!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            navigate("/");
        } else {
            toast.error("Algo deu errado! Verifique seus dados.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    } catch (err) {
        toast.error("Algo deu errado! Verifique seus dados.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    } finally {
        setIsLoading(false);
    }
}

export async function requestLogin(data, setUser, navigate, setIsLoading) {
    setIsLoading(true);
    try {
        const response = await api.post("/sessions", data);

        if (response.status === 200) {
            toast.success("Login efetuado com sucesso", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setUser(response.data.user);

            localStorage.setItem("@KenzieHub: token", response.data.token);
            localStorage.setItem("@KenzieHub: userId", response.data.user.id);

            navigate("/dashboard");
        } else {
            toast.error("Algo deu errado! Verifique seus dados.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    } catch (err) {
        toast.error("Algo deu errado! Verifique seus dados.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    } finally {
        setIsLoading(false);
    }
}
