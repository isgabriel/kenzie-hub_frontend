import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useOutClick } from "../../../hooks/hookOutClick/useOutClick";
import { TechContext } from "../../../Providers/TechContext/TechContext";
import { ContainerForm } from "../../../styles/Container";
import { Form } from "../../../styles/Form";
import { Input } from "../../../styles/Input";
import { Select, SignUpBtn } from "../../FormRegister/style";
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
import {
    DeleteBtn,
    InputDisabled,
    SaveChangesBtn,
    SectionBtnModal,
} from "./style";

export function ModalUpdate() {
    const { setIsModalUpdateVisible, updateTech, removeTech, selectedTech } =
        useContext(TechContext);

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    function submit(data) {
        if (data.status !== "") {
            updateTech(selectedTech.id, data, setLoading);
            reset();
        }
    }

    const refModalUpdate = useOutClick(() => setIsModalUpdateVisible(null));

    return (
        <SectionModal>
            <ModalContainer
                ref={refModalUpdate}
                onClick={(event) => event.stopPropagation()}
            >
                <HeaderModal>
                    <ModalTitle>Editar Tecnologia</ModalTitle>
                    <CloseModalBtn
                        onClick={() => setIsModalUpdateVisible(false)}
                    >
                        X
                    </CloseModalBtn>
                </HeaderModal>

                <ContainerFormModal>
                    <ModalForm onSubmit={handleSubmit(submit)}>
                        <InputWrapper>
                            <Label htmlFor="title">Nome do projeto</Label>
                            <InputDisabled
                                title="Não é possível alterar o nome da tecnologia."
                                type="text"
                                id="title"
                                value={selectedTech.title}
                                placeholder={selectedTech.title}
                                disabled
                            />
                        </InputWrapper>

                        <InputWrapper>
                            <Label>Status</Label>
                            <Select
                                {...register("status")}
                                disabled={loading}
                                required
                            >
                                <option hidden={true}>Selecionar status</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">
                                    Intermediário
                                </option>
                                <option value="Avançado">Avançado</option>
                            </Select>
                        </InputWrapper>

                        <SectionBtnModal>
                            <SaveChangesBtn type="submit">
                                Salvar alterações
                            </SaveChangesBtn>

                            <DeleteBtn
                                onClick={() => {
                                    removeTech(selectedTech.id, setLoading);
                                    setIsModalUpdateVisible(false);
                                }}
                                type="button"
                            >
                                Excluir
                            </DeleteBtn>
                        </SectionBtnModal>
                    </ModalForm>
                </ContainerFormModal>
            </ModalContainer>
        </SectionModal>
    );
}
