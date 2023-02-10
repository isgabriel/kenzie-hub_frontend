import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../../services/api";
import { schemaLogin } from "./schema";

export function FormLogin({ setUser, setIsLoading }) {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaLogin),
    });

    async function onSubmit(data) {
        await requestLogin(data, setUser, navigate, setIsLoading);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>E-mail</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                <span>{errors.email && errors.email.message}</span>
            </div>

            <div>
                <label>Senha</label>
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btnShow"
                >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                <span>{errors.password && errors.password.message}</span>
            </div>

            <button type="submit">Entrar</button>
        </form>
    );
}
