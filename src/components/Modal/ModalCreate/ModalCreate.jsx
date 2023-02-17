import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useOutClick } from "../../../hooks/hookOutClick/useOutClick";
import { TechContext } from "../../../Providers/TechContext/TechContext";
import { Input } from "../../../styles/Input";
import { Select } from "../../FormRegister/style";
import { InputWrapper } from "../../InputWrapper/InputWrapper";
import { Label } from "../../Label/Label";
import {
    CloseModalBtn,
    ContainerFormModal,
    HeaderModal,
    ModalContainer,
    ModalForm,
    ModalTitle,
    SectionModal,
} from "../style";
import { AddTechBtn } from "./style";

export function ModalCreate() {
    const { setIsModalVisible, createTech } = useContext(TechContext);

    const { register, handleSubmit, reset } = useForm();

    function submit(data) {
        if (data.title !== "" && data.status !== "") {
            createTech(data);
            setIsModalVisible(false);
            reset();
        }
    }

    const refModalCreate = useOutClick(() => setIsModalVisible(null));

    return (
        <SectionModal>
            <ModalContainer ref={refModalCreate}>
                <HeaderModal>
                    <ModalTitle>Cadastrar Tecnologia</ModalTitle>
                    <CloseModalBtn onClick={() => setIsModalVisible(false)}>
                        X
                    </CloseModalBtn>
                </HeaderModal>

                <ContainerFormModal>
                    <ModalForm onSubmit={handleSubmit(submit)}>
                        <InputWrapper>
                            <Label htmlFor="title">Nome</Label>
                            <Input
                                type="title"
                                id="title"
                                placeholder="Digite aqui o nome da tecnologia"
                                {...register("title")}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Selecionar status</Label>
                            <Select {...register("status")}>
                                <option hidden={true}>Selecionar status</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">
                                    Intermediário
                                </option>
                                <option value="Avançado">Avançado</option>
                            </Select>
                        </InputWrapper>

                        <AddTechBtn type="submit">
                            Cadastrar Tecnologia
                        </AddTechBtn>
                    </ModalForm>
                </ContainerFormModal>
            </ModalContainer>
        </SectionModal>
    );
}
