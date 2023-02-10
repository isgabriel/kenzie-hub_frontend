import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
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

export function Dashboard({ user }) {
    const handleLogout = () => {
        localStorage.removeItem("@KenzieHub: token");
        localStorage.removeItem("@KenzieHub: userId");
    };

    return (
        <SectionContainer>
            <DivContainerDash>
                <Header>
                    <GoBackBtn to="/" onClick={handleLogout}>
                        Sair
                    </GoBackBtn>
                </Header>
            </DivContainerDash>
            <main>
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
                        Nossa aplicação está em desenvolvimento, em breve
                        teremos novidades
                    </TextRegister>
                </DivInfoBody>
            </main>
        </SectionContainer>
    );
}
