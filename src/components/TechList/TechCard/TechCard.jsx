import { useContext } from "react";
import { TechContext } from "../../../Providers/TechContext/TechContext";
import { ListItem, TechStatus, TechTitle } from "./style";

export const TechCard = ({ tech }) => {
    const { setIsModalUpdateVisible, setSelectedTech } =
        useContext(TechContext);

    return (
        <ListItem
            onClick={() => {
                setIsModalUpdateVisible(true);
                setSelectedTech(tech);
            }}
        >
            <TechTitle>{tech.title}</TechTitle>

            <TechStatus>{tech.status}</TechStatus>
        </ListItem>
    );
};
