import { useContext, useState } from "react";
import { FormRegister } from "../../components/FormRegister/FormRegister";
import { Header } from "../../components/Header/Header";
import { GoBackBtn, TextRegister } from "./style";
import { DivContainer, ContainerForm } from "../../styles/Container";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { HeaderContainerRegister } from "./style";
import { Title } from "../../components/Title/Title";

export function RegisterPage() {
    const { isLoadingRegister } = useContext(UserContext);

    if (isLoadingRegister) {
        return <h2>Carregando...</h2>;
    }
    return (
        <section>
            <DivContainer>
                <HeaderContainerRegister>
                    <Header>
                        <GoBackBtn to="/" type="linkMinor">
                            Voltar
                        </GoBackBtn>
                    </Header>
                </HeaderContainerRegister>
                <ContainerForm>
                    <Title>Crie sua conta</Title>

                    <TextRegister>Rápido e grátis, vamos nessa</TextRegister>

                    <FormRegister />
                </ContainerForm>
            </DivContainer>
        </section>
    );
}
