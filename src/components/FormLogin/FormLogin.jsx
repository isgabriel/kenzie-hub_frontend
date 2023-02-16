import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { schemaLogin } from "./schema";
import { BtnShowPassword } from "../../styles/Button";
import { DivInputPassword, Input } from "../../styles/Input";
import { SpanError } from "../../styles/Text/Text";
import { Form } from "../../styles/Form";
import { ContainerInput } from "../../styles/Container/Container";
import { NameOfInput } from "../../styles/Label";
import { LoginBtn } from "./style";

export function FormLogin() {
    const { requestLogin } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);

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
            <ContainerInput>
                <NameOfInput htmlFor="email">E-mail</NameOfInput>
                <Input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                <SpanError>{errors.email && errors.email.message}</SpanError>
            </ContainerInput>

            <ContainerInput>
                <NameOfInput htmlFor="password">Senha</NameOfInput>
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
                        id="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                </DivInputPassword>
                <SpanError>
                    {errors.password && errors.password.message}
                </SpanError>
            </ContainerInput>

            <LoginBtn type="submit">Entrar</LoginBtn>
        </Form>
    );
}
