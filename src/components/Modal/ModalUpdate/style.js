import styled from "styled-components";
import { ModalBtn } from "../style";

export const InputDisabled = styled.input`
    cursor: not-allowed;
    padding: 12px 13px;

    width: 90%;

    border: none;
    border-radius: var(--Radius-form);

    background-color: var(--grey-2);
    color: var(--grey-1);

    &:focus {
        outline: 0;
        border: 1px solid var(--grey-0);
    }
`;
export const SectionBtnModal = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 325px;
`;
export const SaveChangesBtn = styled.button`
    ${ModalBtn};
    width: 60%;
    max-width: 204px;

    background-color: var(--color-primary-negative);

    &:hover {
        transition: 0.6s;

        background-color: var(--color-primary-focus);
    }
`;
export const DeleteBtn = styled.button`
    ${ModalBtn};
    width: 30%;
    max-width: 98px;

    background-color: var(--grey-1);

    &:hover {
        transition: 0.6s;

        background-color: var(--grey-2);
    }
`;
