import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonSecondary } from "../../styles/Button";

export const HeaderContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 410px;
`;

export const GoBackBtn = styled(Link)`
    ${ButtonSecondary}
`;

export const TextRegister = styled.span`
    font-size: var(--headline);
    font-weight: var(--Light);

    color: var(--grey-1);
`;
