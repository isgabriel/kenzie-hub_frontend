import styled from "styled-components";

export const Input = styled.input`
    padding: 12px 13px;

    width: 90%;

    border: none;
    border-radius: var(--Radius-form);

    background-color: var(--grey-2);
    color: var(--grey-0);

    &:focus {
        outline: 0;
        border: 1px solid var(--grey-0);
    }
`;
