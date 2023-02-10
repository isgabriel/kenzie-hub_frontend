import { Routes as RoutesMain, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export function Routes({ user, setUser }) {
    return (
        <>
            <RoutesMain>
                <Route path="/" element={<LoginPage setUser={setUser} />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<Dashboard user={user} />} />
            </RoutesMain>
        </>
    );
}
