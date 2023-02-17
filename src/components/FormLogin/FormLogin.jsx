import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "./schema";
import { Input } from "../../styles/Input";
import { Form } from "../../styles/Form";

import { LoginBtn } from "./style";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { InputPassword } from "../InputPassword/InputPassword";
import { Label } from "../Label/Label";

export function FormLogin() {
    const { showPassword, setShowPassword } = useContext(UserContext);
    const { requestLogin } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaLogin),
    });

    async function onSubmit(data) {
        await requestLogin(data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <Label htmlFor="email">E-mail</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                <ErrorMessage>
                    {errors.email && errors.email.message}
                </ErrorMessage>
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor="password">Senha</Label>
                <InputPassword>
                    <Input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                </InputPassword>
                <ErrorMessage>
                    {errors.password && errors.password.message}
                </ErrorMessage>
            </InputWrapper>

            <LoginBtn type="submit">Entrar</LoginBtn>
        </Form>
    );
}
