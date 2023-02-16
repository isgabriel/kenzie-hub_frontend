import { useContext, useState } from "react";
import { FormRegister } from "../../components/FormRegister/FormRegister";
import { Header } from "../../components/Header/Header";
import { GoBackBtn } from "./style";
import { DivContainer, ContainerForm } from "../../styles/Container/Container";
import { TextRegister, Title } from "../../styles/Text/Text";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { HeaderContainer } from "./style";

export function RegisterPage() {
    const { isLoadingRegister } = useContext(UserContext);

    if (isLoadingRegister) {
        return <h2>Carregando...</h2>;
    }
    return (
        <section>
            <DivContainer>
                <HeaderContainer>
                    <Header>
                        <GoBackBtn to="/" type="linkMinor">
                            Voltar
                        </GoBackBtn>
                    </Header>
                </HeaderContainer>
                <ContainerForm>
                    <Title>Crie sua conta</Title>

                    <TextRegister>Rápido e grátis, vamos nessa</TextRegister>

                    <FormRegister />
                </ContainerForm>
            </DivContainer>
        </section>
    );
}
