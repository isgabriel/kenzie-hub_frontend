import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext/TechContext";
import { TechCard } from "./TechCard/TechCard";
import { AddMoreTechs, ListTechs } from "./style";

export const TechList = () => {
    const { techList, isModalUpdateVisible } = useContext(TechContext);

    return (
        <ListTechs>
            {techList && techList.length > 0 ? (
                techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
            ) : (
                <AddMoreTechs>Adicione novas tecnologias</AddMoreTechs>
            )}
        </ListTechs>
    );
};
