import { useContext } from "react";
import { DashInfo } from "../../components/DashInfo/DashInfo";
import { ModalCreate } from "../../components/Modal/ModalCreate/ModalCreate";
import { TechList } from "../../components/TechList/TechList";
import { TechContext } from "../../Providers/TechContext/TechContext";

export function Dashboard() {
    const { isModalVisible, setIsModalVisible } = useContext(TechContext);
    return (
        <main>
            {" "}
            {isModalVisible && <ModalCreate />}
            <DashInfo />
            <div>
                <div>
                    <h3>Tecnologias</h3>

                    <button onClick={() => setIsModalVisible(true)}>+</button>
                </div>
                <TechList />
            </div>
        </main>
    );
}
