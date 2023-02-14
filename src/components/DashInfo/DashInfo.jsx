import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { GoBackBtn } from "../../styles/Button/Button";
import {
    DivContainerDash,
    DivInfoBody,
    DivUserInfos,
    SectionContainer,
} from "../../styles/Container/Container";
import {
    DashboardTitleTextMain,
    NameUserDashboard,
    TextRegister,
    UserModuleDashboard,
} from "../../styles/Text/Text";
import { Header } from "../Header/Header";

export function DashInfo() {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <SectionContainer>
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
            <DivInfoBody>
                <DashboardTitleTextMain>
                    Que pena! Estamos em desenvolvimento {":("}
                </DashboardTitleTextMain>
                <TextRegister>
                    Nossa aplicação está em desenvolvimento, em breve teremos
                    novidades
                </TextRegister>
            </DivInfoBody>
        </SectionContainer>
    );
}
