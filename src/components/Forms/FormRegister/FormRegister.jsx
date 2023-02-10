import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { requestRegister } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { schemaRegister } from "./schema";
import { Form } from "../../../styles/Form/Form";
import { DivContainerInput } from "../../../styles/Container/Container";
import { NameOfInput, SpanError } from "../../../styles/Text/Text";
import { DivInputPassword, Input } from "../../../styles/Input/Input";
import {
    BtnShowPassword,
    LoginBtn,
    SignUpBtn,
    SignUpLink,
} from "../../../styles/Button/Button";
import { Select } from "../../../styles/Select/Select";

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
        <Form onSubmit={handleSubmit(RegisteronSubmit)}>
            <DivContainerInput>
                <NameOfInput>Nome</NameOfInput>
                <Input
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                />
                {errors.name && <SpanError>{errors.name.message}</SpanError>}
            </DivContainerInput>

            <DivContainerInput>
                <NameOfInput>E-mail</NameOfInput>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                {errors.email && <SpanError>{errors.email.message}</SpanError>}
            </DivContainerInput>

            <DivContainerInput>
                <NameOfInput>Senha</NameOfInput>
                <DivInputPassword>
                    <BtnShowPassword
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="btnShow"
                    >
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </BtnShowPassword>
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                </DivInputPassword>

                {errors.password && (
                    <SpanError>{errors.password.message}</SpanError>
                )}
            </DivContainerInput>

            <DivContainerInput>
                <NameOfInput>Confirme sua senha</NameOfInput>
                <DivInputPassword>
                    <BtnShowPassword
                        type="button"
                        onClick={() =>
                            setShowSecondPassword(!showSecondPassword)
                        }
                        className="btnShow"
                    >
                        {showSecondPassword ? (
                            <AiFillEye />
                        ) : (
                            <AiFillEyeInvisible />
                        )}
                    </BtnShowPassword>
                    <Input
                        type={showSecondPassword ? "text" : "password"}
                        placeholder="Confirme sua senha"
                        {...register("confirmPassword")}
                    />
                </DivInputPassword>

                {errors.confirmPassword && (
                    <SpanError>{errors.confirmPassword.message}</SpanError>
                )}
            </DivContainerInput>

            <DivContainerInput>
                <NameOfInput>Bio</NameOfInput>
                <Input
                    type="text"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                />
                {errors.bio && <SpanError>{errors.bio.message}</SpanError>}
            </DivContainerInput>

            <DivContainerInput>
                <NameOfInput>Contato</NameOfInput>
                <Input
                    type="text"
                    placeholder="Opção de contato"
                    {...register("contact")}
                />
                {errors.contact && (
                    <SpanError>{errors.contact.message}</SpanError>
                )}
            </DivContainerInput>

            <DivContainerInput>
                <NameOfInput>Selecionar módulo</NameOfInput>
                <Select {...register("course_module")}>
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
                </Select>
                {errors.course_module && (
                    <SpanError>{errors.course_module.message}</SpanError>
                )}
            </DivContainerInput>

            <SignUpBtn type="submit">Cadastrar</SignUpBtn>
        </Form>
    );
}
