import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { BtnShowPassword } from "./BtnShowPassword/BtnShowPassword";
import { DivInputPassword } from "./style";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export function InputPassword({ children }) {
    const { showPassword, setShowPassword } = useContext(UserContext);
    return (
        <DivInputPassword>
            <BtnShowPassword>
                {" "}
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </BtnShowPassword>
            {children}
        </DivInputPassword>
    );
}
