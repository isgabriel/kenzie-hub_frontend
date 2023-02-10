import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { requestRegister } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { schemaRegister } from "./schema";

export function FormRegister({ setIsLoading }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaRegister),
    });

    async function RegisteronSubmit(data) {
        await requestRegister(data, navigate, setIsLoading);
    }

    return (
        <form onSubmit={handleSubmit(RegisteronSubmit)}>
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
                <label>E-mail</label>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}
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
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>
                <label>Confirme sua senha</label>
                <button
                    type="button"
                    onClick={() => setShowSecondPassword(!showSecondPassword)}
                    className="btnShow"
                >
                    {showSecondPassword ? (
                        <AiFillEye />
                    ) : (
                        <AiFillEyeInvisible />
                    )}
                </button>
                <input
                    type={showSecondPassword ? "text" : "password"}
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <span>{errors.confirmPassword.message}</span>
                )}
            </div>

            <div>
                <label>Bio</label>
                <input
                    type="text"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                />
                {errors.bio && <span>{errors.bio.message}</span>}
            </div>

            <div>
                <label>Contato</label>
                <input
                    type="text"
                    placeholder="Opção de contato"
                    {...register("contact")}
                />
                {errors.contact && <span>{errors.contact.message}</span>}
            </div>

            <div>
                <label>Selecionar módulo</label>
                <select {...register("course_module")}>
                    <option hidden={true}>Selecione seu módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">
                        Primeiro módulo
                    </option>
                    <option value="Segundo módulo (Frontend Avançado)">
                        Segundo módulo
                    </option>
                    <option value="Terceiro módulo (Introdução ao Backend)">
                        Terceiro módulo
                    </option>
                    <option value="Quarto módulo (Backend Avançado)">
                        Quarto módulo
                    </option>
                </select>
                {errors.course_module && (
                    <span>{errors.course_module.message}</span>
                )}
            </div>

            <button type="submit">Entrar</button>
        </form>
    );
}
