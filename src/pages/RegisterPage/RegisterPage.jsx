import { useState } from "react";
import { Link } from "react-router-dom";
import { FormRegister } from "../../components/Forms/FormRegister/FormRegister";
import { Header } from "../../components/Header/Header";

export function RegisterPage({ setUser }) {
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
                <Header>
                    <Link to="/" type="linkMinor">
                        Voltar
                    </Link>
                </Header>
                <div>
                    <h2>Crie sua conta</h2>

                    <span>Rapido e grátis, vamos nessa</span>

                    <FormRegister
                        setUser={setUser}
                        setIsLoading={setIsLoading}
                    />
                </div>
            </div>
        </div>
    );
}
