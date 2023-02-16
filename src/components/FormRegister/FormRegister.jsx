import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { schemaRegister } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Form } from "../../styles/Form";
import { ContainerInput } from "../../styles/Container/Container";
import { SpanError } from "../../styles/Text/Text";
import { DivInputPassword, Input } from "../../styles/Input";
import { BtnShowPassword, SignUpBtn } from "../../styles/Button";
import { Select } from "../../styles/Select/Select";
import { UserContext } from "../../Providers/UserContext/UserContext";
import { NameOfInput } from "../../styles/Label";

export function FormRegister() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);

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
            <ContainerInput>
                <NameOfInput>Nome</NameOfInput>
                <Input
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                />
                {errors.name && <SpanError>{errors.name.message}</SpanError>}
            </ContainerInput>

            <ContainerInput>
                <NameOfInput>E-mail</NameOfInput>
                <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                {errors.email && <SpanError>{errors.email.message}</SpanError>}
            </ContainerInput>

            <ContainerInput>
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
            </ContainerInput>

            <ContainerInput>
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
            </ContainerInput>

            <ContainerInput>
                <NameOfInput>Bio</NameOfInput>
                <Input
                    type="text"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                />
                {errors.bio && <SpanError>{errors.bio.message}</SpanError>}
            </ContainerInput>

            <ContainerInput>
                <NameOfInput>Contato</NameOfInput>
                <Input
                    type="text"
                    placeholder="Opção de contato"
                    {...register("contact")}
                />
                {errors.contact && (
                    <SpanError>{errors.contact.message}</SpanError>
                )}
            </ContainerInput>

            <ContainerInput>
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
            </ContainerInput>

            <SignUpBtn type="submit">Cadastrar</SignUpBtn>
        </Form>
    );
}
