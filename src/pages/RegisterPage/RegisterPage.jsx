import { useContext, useState } from "react";
import { FormRegister } from "./FormRegister/FormRegister";
import { Header } from "../../components/Header/Header";
import { GoBackBtn } from "../../styles/Button/Button";
import {
    DivContainer,
    DivContainerForm,
    DivHeaderContainerLogin,
    SectionContainer,
} from "../../styles/Container/Container";
import { TextRegister, Title } from "../../styles/Text/Text";
import { UserContext } from "../../Providers/UserContext/UserContext";

export function RegisterPage() {
    const { isLoadingRegister } = useContext(UserContext);

    if (isLoadingRegister) {
        return <h2>Carregando...</h2>;
    }
    return (
        <SectionContainer>
            <DivContainer>
                <DivHeaderContainerLogin>
                    <Header>
                        <GoBackBtn to="/" type="linkMinor">
                            Voltar
                        </GoBackBtn>
                    </Header>
                </DivHeaderContainerLogin>
                <DivContainerForm>
                    <Title>Crie sua conta</Title>

                    <TextRegister>Rápido e grátis, vamos nessa</TextRegister>

                    <FormRegister />
                </DivContainerForm>
            </DivContainer>
        </SectionContainer>
    );
}
