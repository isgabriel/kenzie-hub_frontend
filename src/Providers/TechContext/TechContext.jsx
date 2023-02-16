import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext/UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const techListAPI = user && user.techs;

    const [isModalVisible, setIsModalVisible] = useState(null);
    const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(null);
    const [selectedTech, setSelectedTech] = useState({});
    const [techList, setTechList] = useState();

    const token = localStorage.getItem("@KenzieHub: token");

    useEffect(() => {
        setTechList(techListAPI);
    }, [techListAPI]);

    const { getUser } = useContext(UserContext);
    const [isModalCreated, setIsModalCreated] = useState(null);
    const [isLoadingCreate, setIsLoadingCreate] = useState(false);

    async function handleCreate(data) {
        setIsLoadingCreate(true);

        try {
            await api.post("/users/techs", data);
            await getUser();

            toast.success("A tecnologia foi criada com sucesso!");
            setIsModalCreated(null);
        } catch (error) {
            const { message } = error.response.data;
            message.toLowerCase().includes("already")
                ? toast.error("A tecnologia já foi cadastrada!")
                : toast.error("Algo deu errado!");
        } finally {
            setIsLoadingCreate(false);
        }
    }

    async function removeTech(id, setLoading) {
        try {
            const response = await api.delete("/users/techs/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setLoading(true);
            toast.success("A tecnologia foi removida com sucesso!!");

            const filteredTechList = techList.filter((tech) => tech.id !== id);
            setTechList(filteredTechList);
        } catch (error) {
            toast.error("Algo deu errado!");
        } finally {
            setLoading(false);
        }
    }

    async function updateTech(id, formData, setLoading) {
        try {
            const response = await api.put("/users/techs/" + id, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setLoading(true);
            toast.success("A tecnologia foi atualizada com sucesso!");
            setIsModalUpdateVisible(false);

            const newStatus = techList.map((tech) => {
                if (tech.id === id) {
                    return { ...tech, status: formData.status };
                } else {
                    return { ...tech };
                }
            });

            setTechList(newStatus);
        } catch (error) {
            toast.error("Algo deu errado!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <TechContext.Provider
            value={{
                isModalVisible,
                setIsModalVisible,
                handleCreate,
                removeTech,
                techList,
                isModalUpdateVisible,
                setIsModalUpdateVisible,
                updateTech,
                selectedTech,
                setSelectedTech,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};
