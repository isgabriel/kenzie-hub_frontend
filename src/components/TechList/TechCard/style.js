import styled from "styled-components";

export const ListItem = styled.li`
    cursor: pointer;

    background-color: var(--grey-4);

    padding: 12px;

    width: 90%;

    display: flex;
    justify-content: space-between;

    border-radius: var(--RadiusBtn-default);

    &:hover {
        transition: 0.6s;
        transform: scale(1.05);
        background-color: var(--grey-2);
    }
`;
export const TechTitle = styled.h3`
    font-size: var(--text-1);
    font-weight: var(--Bold);

    color: var(--grey-0);
`;
export const TechStatus = styled.p`
    font-size: var(--headline);
    font-weight: var(--Regular);

    color: var(--grey-1);
`;
