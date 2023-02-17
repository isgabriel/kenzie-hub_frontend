import styled from "styled-components";
import { ModalBtn } from "../style";

export const AddTechBtn = styled.button`
    ${ModalBtn};
    width: 100%;

    max-width: 325px;

    border: none;

    background-color: var(--color-primary);
    color: var(--grey-0);
    &:hover {
        transition: 0.6s;
        background-color: var(--color-primary-focus);
    }
`;
