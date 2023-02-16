import { useContext } from "react";
import { TechContext } from "../../../Providers/TechContext/TechContext";

export const TechCard = ({ tech }) => {
    const { setIsModalUpdateVisible, setSelectedTech } =
        useContext(TechContext);

    return (
        <li
            onClick={() => {
                setIsModalUpdateVisible(true);
                setSelectedTech(tech);
            }}
        >
            <h3>{tech.title}</h3>

            <p>{tech.status}</p>
        </li>
    );
};
