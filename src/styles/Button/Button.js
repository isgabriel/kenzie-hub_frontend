import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonPrimary = css`
    min-width: 260px;
    max-width: 325px;

    padding: 11px 0;

    text-align: center;

    border-radius: var(--RadiusBtn-default);
    font-size: var(--Button-size);
    font-weight: var(--Medium);
`;

export const LoginBtn = styled.button`
    ${ButtonPrimary};
    width: 100%;

    border: none;

    background-color: var(--color-primary);
    color: var(--grey-0);

    font-size: var(--Button-size);
    font-weight: var(--Medium);
`;
export const SignUpLink = styled(Link)`
    ${ButtonPrimary};

    background-color: var(--grey-1);
    color: var(--grey-0);

    width: 100%;
`;
export const GoBackBtn = styled(Link)`
    border-radius: var(--RadiusBtn-default);

    text-align: center;

    background-color: var(--grey-3);
    color: var(--grey-0);

    padding: 9px 23px;
    max-width: 68px;

    font-size: var(--headline);
    font-weight: var(--Medium);
`;
export const BtnShowPassword = styled.button`
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
