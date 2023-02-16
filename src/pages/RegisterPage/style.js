import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 410px;
`;
export const GoBackBtn = styled(Link)`
    cursor: pointer;
    border-radius: var(--RadiusBtn-default);

    text-align: center;

    background-color: var(--grey-3);
    color: var(--grey-0);

    padding: 9px 23px;
    max-width: 68px;

    font-size: var(--headline);
    font-weight: var(--Medium);
`;
