import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary } from "../../styles/Button";

export const SignUpLink = styled(Link)`
    ${ButtonPrimary};

    background-color: var(--grey-1);
    color: var(--grey-0);

    width: 100%;

    &:hover {
        transition: 0.6s;
        background-color: var(--grey-2);
    }
`;
export const TextToSignUp = styled.p`
    font-size: var(--inputTitle);
    font-weight: var(--SemiBold);

    color: var(--grey-0);
`;
export const SectionSignUp = styled.section`
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
`;
