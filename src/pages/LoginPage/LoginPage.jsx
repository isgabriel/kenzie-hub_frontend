import { Logo } from "../../components/Logo/Logo";
import { useState } from "react";
import { FormLogin } from "../../components/Forms/FormLogin/FormLogin";
import { SignUpLink } from "../../styles/Button/Button";
import { TextToSignUp, Title } from "../../styles/Text/Text";
import {
    DivContainer,
    DivContainerForm,
    SectionContainer,
    SectionSignUp,
} from "../../styles/Container/Container";

export function LoginPage({ setUser }) {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <div>
                <Title>Carregando...</Title>
            </div>
        );
    }
    return (
        <SectionContainer>
            <DivContainer>
                <Logo />
                <DivContainerForm>
                    <Title>Login</Title>

                    <FormLogin setUser={setUser} setIsLoading={setIsLoading} />

                    <SectionSignUp>
                        <TextToSignUp>Ainda não possui uma conta?</TextToSignUp>

                        <SignUpLink to="/register" type="disabled">
                            Cadastre-se
                        </SignUpLink>
                    </SectionSignUp>
                </DivContainerForm>
            </DivContainer>
        </SectionContainer>
    );
}
