import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../styles/Form";
import { Input } from "../../styles/Input";
import { UserContext } from "../../Providers/UserContext/UserContext";

import { InputWrapper } from "../InputWrapper/InputWrapper";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { InputPassword } from "../InputPassword/InputPassword";
import { GoBackBtn, OrText, Select, SignUpBtn } from "./style";
import { Label } from "../Label/Label";

export function FormRegister() {
    const { showPassword, setShowPassword } = useContext(UserContext);

    const { requestRegister } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaRegister),
    });

    async function RegisteronSubmit(data) {
        await requestRegister(data);
    }

    return (
        <Form onSubmit={handleSubmit(RegisteronSubmit)}>
            <InputWrapper>
                <Label>Nome</Label>
                <Input
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </InputWrapper>

            <InputWrapper>
                <Label>E-mail</Label>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
            </InputWrapper>

            <InputWrapper>
                <Label>Senha</Label>
                <InputPassword>
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                </InputPassword>

                {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
            </InputWrapper>

            <InputWrapper>
                <Label>Confirme sua senha</Label>
                <InputPassword>
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirme sua senha"
                        {...register("confirmPassword")}
                    />
                </InputPassword>

                {errors.confirmPassword && (
                    <ErrorMessage>
                        {errors.confirmPassword.message}
                    </ErrorMessage>
                )}
            </InputWrapper>

            <InputWrapper>
                <Label>Bio</Label>
                <Input
                    type="text"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                />
                {errors.bio && (
                    <ErrorMessage>{errors.bio.message}</ErrorMessage>
                )}
            </InputWrapper>

            <InputWrapper>
                <Label>Contato</Label>
                <Input
                    type="text"
                    placeholder="Opção de contato"
                    {...register("contact")}
                />
                {errors.contact && (
                    <ErrorMessage>{errors.contact.message}</ErrorMessage>
                )}
            </InputWrapper>

            <InputWrapper>
                <Label>Selecionar módulo</Label>
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
                    <ErrorMessage>{errors.course_module.message}</ErrorMessage>
                )}
            </InputWrapper>

            <SignUpBtn type="submit">Cadastrar</SignUpBtn>
            <OrText>OU</OrText>
            <GoBackBtn to="/" type="linkMinor">
                Voltar
            </GoBackBtn>
        </Form>
    );
}
