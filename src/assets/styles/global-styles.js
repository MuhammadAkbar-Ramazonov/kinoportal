import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        height: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    img,
    svg {
        display: block;
        height: auto;
    }

    body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        padding: 0;

        overflow-x: hidden;
    }
    .site-main {
        flex-grow: 1;
    }
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: darkcyan;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #0eb3b3;
    }

`;
