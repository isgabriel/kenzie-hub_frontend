import styled from "styled-components";
import { ButtonPrimary } from "../../styles/Button";

export const SignUpBtn = styled.button`
    ${ButtonPrimary};
    width: 100%;

    border: none;

    background-color: var(--color-primary-negative);
    color: var(--grey-0);
    &:hover {
        transition: 0.6s;
        background-color: var(--color-primary);
    }
`;

export const Select = styled.select`
    cursor: pointer;

    padding: 11px 13px;

    width: 100%;
    min-width: 230px;
    max-width: 325px;

    border: none;
    border-radius: var(--Radius-form);

    background-color: var(--grey-2);
    color: var(--grey-0);
    &:focus {
        outline: 0;
        border: 1px solid var(--grey-0);
    }
`;
