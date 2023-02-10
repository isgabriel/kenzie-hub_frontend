import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;

  --grey-0: #F8F9FA;
  --grey-1: #868E96;
  --grey-2: #343B41;
  --grey-3: #212529;
  --grey-4: #121214;

  --success-feedback: #3FE864;
  --negative-feedback: #E83F5B;

  /* Typography */
  --title-1: 1.125rem;
  --title-2: 1rem;
  --title-3: 1rem;
  --text-1: 0.85rem;
  --headline: .75rem;

  --Button-size: 1rem;
  --inputTitle: .625rem;


  --Bold: 700;
  --SemiBold: 600;
  --Medium: 500;
  --Regular: 400;
  --Light: 300;

  --RadiusBtn-default: 4px;
  --Radius-form: 3px;

  background-color: var(--grey-4);
  color: var(--grey-0);
}
`;
