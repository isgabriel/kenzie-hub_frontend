import { Logo } from "../../components/Logo/Logo";

import { TextToSignUp, Title } from "../../styles/Text/Text";
import {
    DivContainer,
    ContainerForm,
    SectionSignUp,
} from "../../styles/Container/Container";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { FormLogin } from "../../components/FormLogin/FormLogin";
import { SignUpLink } from "./style";

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
        <section>
            <DivContainer>
                <Logo />
                <ContainerForm>
                    <Title>Login</Title>

                    <FormLogin />
                    <SectionSignUp>
                        <TextToSignUp>Ainda não possui uma conta?</TextToSignUp>

                        <SignUpLink to="/register" type="disabled">
                            Cadastre-se
                        </SignUpLink>
                    </SectionSignUp>
                </ContainerForm>
            </DivContainer>
        </section>
    );
}
