import styled, { css } from "styled-components";
import { Input } from "../../styles/Input";

export const SectionModal = styled.dialog`
    z-index: 10;

    height: 100%;
    min-width: 280px;
    width: 100vw;

    border: none;

    padding: 0;

    background-color: rgba(18, 18, 20, 0.5);
    color: var(--grey-0);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    background-color: var(--grey-3);

    border-radius: var(--RadiusBtn-default);

    width: 90%;
    max-width: 369px;
`;
export const HeaderModal = styled.div`
    border-top-left-radius: var(--RadiusBtn-default);
    border-top-right-radius: var(--RadiusBtn-default);

    background-color: var(--grey-2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 16px;
`;
export const ModalTitle = styled.h3`
    font-size: var(--text-1);
    font-weight: var(--Bold);
`;
export const CloseModalBtn = styled.button`
    cursor: pointer;

    background-color: transparent;
    color: var(--grey-1);

    border: none;

    font-size: var(--title-3);
    font-weight: var(--SemiBold);

    &:hover {
        transition: 0.6s;
        color: var(--grey-3);
    }
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;

    width: 90%;
`;

export const ContainerFormModal = styled.div`
    margin-top: 18px;
    margin-bottom: 32px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ModalBtn = css`
    padding: 11px 0;

    text-align: center;

    border-radius: var(--RadiusBtn-default);
    border: none;

    font-size: var(--Button-size);
    font-weight: var(--Medium);

    cursor: pointer;

    color: var(--grey-0);
`;
