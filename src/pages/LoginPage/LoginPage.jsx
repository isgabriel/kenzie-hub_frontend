import { Logo } from "../../components/Logo/Logo";

import { SignUpLink } from "../../styles/Button/Button";
import { TextToSignUp, Title } from "../../styles/Text/Text";
import {
    DivContainer,
    DivContainerForm,
    SectionContainer,
    SectionSignUp,
} from "../../styles/Container/Container";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { FormLogin } from "./FormLogin/FormLogin";

export function LoginPage() {
    const { isLoadingLogin } = useContext(UserContext);

    if (isLoadingLogin) {
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

                    <FormLogin />
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
