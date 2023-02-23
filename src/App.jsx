import { GlobalStyles } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";

export function App() {
    return (
        <>
            <GlobalStyles />
            <ToastContainer />
            <Routes />
        </>
    );
}
