import { useContext } from "react";
import { ShowPassword } from "./style";
import { UserContext } from "../../../Providers/UserContext/UserContext";

export function BtnShowPassword({ children }) {
    const { showPassword, setShowPassword } = useContext(UserContext);
    return (
        <ShowPassword
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btnShow"
        >
            {children}
        </ShowPassword>
    );
}
