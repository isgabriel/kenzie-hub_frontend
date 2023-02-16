import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext/TechContext";
import { TechCard } from "./TechCard/TechCard";
import { ModalUpdate } from "../Modal/ModalUpdate/ModalUpdate";

export const TechList = () => {
    const { techList, isModalUpdateVisible } = useContext(TechContext);

    return (
        <ul>
            {isModalUpdateVisible && <ModalUpdate />}

            {techList && techList.length > 0 ? (
                techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
            ) : (
                <p>Adicione novas tecnologias</p>
            )}
        </ul>
    );
};
