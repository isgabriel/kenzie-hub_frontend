import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { Header } from "../Header/Header";
import {
    DivBorders,
    DivContainerDash,
    DivUserInfos,
    LogoutBtn,
    NameUserDashboard,
    SectionContainerDash,
    UserModuleDashboard,
} from "./style";

export function DashInfo() {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <SectionContainerDash>
            <DivContainerDash>
                <Header>
                    <LogoutBtn to="/" onClick={handleLogout}>
                        Sair
                    </LogoutBtn>
                </Header>
            </DivContainerDash>
            <DivBorders>
                <DivUserInfos>
                    <NameUserDashboard>Olá, {user.name}</NameUserDashboard>
                    <UserModuleDashboard>
                        {user.course_module}
                    </UserModuleDashboard>
                </DivUserInfos>
            </DivBorders>
        </SectionContainerDash>
    );
}
