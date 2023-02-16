import styled from "styled-components";
import { ButtonPrimary } from "../../styles/Button";

export const LoginBtn = styled.button`
    ${ButtonPrimary};
    width: 100%;

    border: none;

    background-color: var(--color-primary);
    color: var(--grey-0);

    font-size: var(--Button-size);
    font-weight: var(--Medium);
`;
