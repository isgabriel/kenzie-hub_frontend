import { Logo } from "../../components/Logo/Logo";

import { DivContainer, ContainerForm } from "../../styles/Container";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { FormLogin } from "../../components/FormLogin/FormLogin";
import { SectionSignUp, SignUpLink, TextToSignUp } from "./style";
import { Title } from "../../components/Title/Title";

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
