import styled from "styled-components";

export const Select = styled.select`
    padding: 9px 13px;

    width: 97%;
    min-width: 260px;

    border: none;
    border-radius: var(--Radius-form);

    background-color: var(--grey-2);
    color: var(--grey-0);
    &:focus {
        outline: 0;
        border: 1px solid var(--grey-0);
    }
`;
