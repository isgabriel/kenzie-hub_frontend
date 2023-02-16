import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonPrimary = css`
    min-width: 230px;
    max-width: 325px;

    padding: 11px 0;

    text-align: center;

    border-radius: var(--RadiusBtn-default);
    font-size: var(--Button-size);
    font-weight: var(--Medium);
    cursor: pointer;
`;

export const BtnShowPassword = styled.button`
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 10px;
    background-color: transparent;
    border: none;
`;
export const SignUpBtn = styled.button`
    ${ButtonPrimary};
    width: 100%;

    border: none;

    background-color: var(--color-primary-negative);
    color: var(--grey-0);
`;
