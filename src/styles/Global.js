import { createGlobalStyle } from "styled-components";

export const Global =  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100%;
        height: 100vh;
    }

    h1{
        font-family: "Merriweather", serif;
        font-weight: 400;
        color: #0D99FF;
    }

    h2 {
        font-family: "Merriweather", serif;
        font-weight: 400;
        color: #0D99FF;
    }
    
    p{
        font-family: "M PLUS 1p", sans-serif;
        font-weight: 700;
    }

    a{
        font-family: "Inter", sans-serif;
        text-decoration: none;
        color: #ffffff;
    }
`