import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary } from "../../styles/Button";

export const SignUpLink = styled(Link)`
    ${ButtonPrimary};

    background-color: var(--grey-1);
    color: var(--grey-0);

    width: 100%;
`;
