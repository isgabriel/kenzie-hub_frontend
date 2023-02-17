import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonSecondary } from "../../styles/Button";

export const SectionContainerDash = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const DivContainerDash = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;

    width: 100%;
    max-width: 860px;
`;
export const LogoutBtn = styled(Link)`
    ${ButtonSecondary}
`;
export const DivBorders = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
`;
export const DivUserInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 90%;
    max-width: 780px;

    padding: 35px 12px;

    @media only screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const NameUserDashboard = styled.h2`
    font-size: var(--title-1);
    font-weight: var(--Bold);
`;
export const UserModuleDashboard = styled.p`
    font-size: var(--headline);
    font-weight: var(--Regular);

    color: var(--grey-1);
`;
