import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { GoBackBtn } from "../../pages/RegisterPage/style";
import {
    DivContainerDash,
    DivUserInfos,
} from "../../styles/Container/Container";
import { NameUserDashboard, UserModuleDashboard } from "../../styles/Text/Text";
import { Header } from "../Header/Header";

export function DashInfo() {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <section>
            <DivContainerDash>
                <Header>
                    <GoBackBtn to="/" onClick={handleLogout}>
                        Sair
                    </GoBackBtn>
                </Header>
            </DivContainerDash>
            <div>
                <DivUserInfos>
                    <NameUserDashboard>Olá, {user.name}</NameUserDashboard>
                    <UserModuleDashboard>
                        {user.course_module}
                    </UserModuleDashboard>
                </DivUserInfos>
            </div>
        </section>
    );
}
