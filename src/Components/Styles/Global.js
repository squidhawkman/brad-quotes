import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
//here are your global styles

body {
    display: flex;
    height: 88vh;
text-align: center;
align-items: center;
    justify-content: center;
font-size: 1.15em;
background-color: ${({theme}) => theme.color};
transition: background-color 1s;
}
`
