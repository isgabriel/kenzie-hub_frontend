import styled from "styled-components";

export const section = styled.section`
    /* height: 100vh; */
`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    background-color: var(--grey-3);

    margin-top: 20px;
    padding: 34px 0;
    margin-bottom: 20px;

    width: 90%;
    max-width: 370px;

    border-radius: var(--Radius-form);
`;

export const SectionSignUp = styled.section`
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
`;
export const HeaderContainer = styled.header`
    width: 90%;

    margin-top: 30px;

    display: flex;
    justify-content: space-between;
`;
export const DivContainerDash = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;
export const DivUserInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 35px 12px;

    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);

    @media only screen and (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const DivInfoBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 35px 12px;
`;
