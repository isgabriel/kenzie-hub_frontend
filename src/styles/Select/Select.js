import styled from "styled-components";

export const Select = styled.select`
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
