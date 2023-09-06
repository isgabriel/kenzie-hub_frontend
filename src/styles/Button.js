import { css } from "styled-components";

export const ButtonPrimary = css`
    min-width: 230px;
    max-width: 325px;

    padding: 11px 0;

    text-align: center;

    border-radius: var(--RadiusBtn-default);
    font-size: var(--Button-size);
    font-weight: var(--Medium);
    cursor: pointer;
`;

export const ButtonSecondary = css`
    cursor: pointer;
    border-radius: var(--RadiusBtn-default);

    text-align: center;

    background-color: var(--grey-2);
    color: var(--grey-0);

    padding: 9px 23px;
    max-width: 68px;

    font-size: var(--headline);
    font-weight: var(--Medium);

    &:hover {
        transition: 0.6s;
        background-color: var(--grey-2);
    }
`;
