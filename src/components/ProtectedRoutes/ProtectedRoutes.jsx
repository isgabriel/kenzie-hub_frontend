import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext/UserContext";

export function ProtectedRoutes() {
    const { user, isLoadingPage } = useContext(UserContext);

    if (isLoadingPage) {
        return (
            <div>
                <h2>Carregando...</h2>
            </div>
        );
    }

    return user ? <Outlet /> : <Navigate to="/" />;
}
