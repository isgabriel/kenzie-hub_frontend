import { Logo } from "../../components/Logo/Logo";
import { useState } from "react";
import { FormLogin } from "../../components/Forms/FormLogin/FormLogin";
import { Link } from "react-router-dom";

export function LoginPage({ setUser }) {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <div>
                <h2>Carregando...</h2>
            </div>
        );
    }
    return (
        <div>
            <div>
                <Logo />
                <div>
                    <h2>Login</h2>

                    <FormLogin setUser={setUser} setIsLoading={setIsLoading} />

                    <span>Ainda não possui uma conta?</span>

                    <Link to="/register" type="disabled">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    );
}
