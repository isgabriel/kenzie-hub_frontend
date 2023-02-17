import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
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
