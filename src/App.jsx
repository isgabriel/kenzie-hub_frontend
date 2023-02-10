import { useState } from "react";
import { GlobalReset } from "./styles/globalReset";
import { GlobalStyles } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./routes/Routes";

export function App() {
    const [user, setUser] = useState(null);
    return (
        <>
            <GlobalReset />
            <GlobalStyles />
            <ToastContainer />
            <Routes user={user} setUser={setUser} />
        </>
    );
}
