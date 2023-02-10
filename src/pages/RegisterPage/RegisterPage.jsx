import { useState } from "react";
import { FormRegister } from "../../components/Forms/FormRegister/FormRegister";
import { Header } from "../../components/Header/Header";
import { GoBackBtn } from "../../styles/Button/Button";
import {
    DivContainer,
    DivContainerForm,
    DivHeaderContainerLogin,
    SectionContainer,
} from "../../styles/Container/Container";
import { TextRegister, Title } from "../../styles/Text/Text";

export function RegisterPage({ setUser }) {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
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

                    <FormRegister
                        setUser={setUser}
                        setIsLoading={setIsLoading}
                    />
                </DivContainerForm>
            </DivContainer>
        </SectionContainer>
    );
}
