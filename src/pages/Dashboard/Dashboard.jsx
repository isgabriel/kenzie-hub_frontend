import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

export function Dashboard({ user }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("@KenzieHub: token");
        localStorage.removeItem("@KenzieHub: userId");

        navigate("/");
    };

    return (
        <div>
            <div>
                <Header>
                    <button onClick={handleLogout}>Sair</button>
                </Header>
            </div>
            <main>
                <div>
                    <div>
                        <h2>Olá, {user.name}</h2>
                        <p>{user.course_module}</p>
                    </div>
                </div>
                <div>
                    <h2>Que pena! Estamos em desenvolvimento {":("}</h2>
                    <p>
                        Nossa aplicação está em desenvolvimento, em breve
                        teremos novidades
                    </p>
                </div>
            </main>
        </div>
    );
}
