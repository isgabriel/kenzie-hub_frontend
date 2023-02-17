import styled from "styled-components";

export const MainDash = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* align-items: center; */
`;
export const SectionTecnologies = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const DivTecnologies = styled.div`
    display: flex;
    justify-content: space-between;

    width: 90%;
    max-width: 780px;

    padding: 20px 0;
`;
export const TecnologiesTitle = styled.h3`
    font-size: var(--title-3);
    font-weight: var(--SemiBold);
`;
export const ButtonAddTech = styled.button`
    cursor: pointer;

    background-color: var(--grey-3);
    color: var(--grey-0);

    border: none;
    border-radius: var(--RadiusBtn-default);

    padding: 4px 10px;

    font-size: 20px;

    &:hover {
        transition: 0.6s;
        background-color: var(--grey-2);
    }
`;
