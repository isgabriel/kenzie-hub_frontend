import { Routes as RoutesMain, Route } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export function Routes() {
    return (
        <>
            <RoutesMain>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </RoutesMain>
        </>
    );
}
