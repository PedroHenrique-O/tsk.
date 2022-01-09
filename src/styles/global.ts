import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{

    --background: #181820; 
    --taskBackground-primary:#272733;
    --taskBackground-secondary: #21212B;
    --font-color-primary: #F5F5F6;
    --purple: #AC6DDE; 
    --gray-50: #F5F5F6;
    --gray-750: #414052;
 
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}


body{

    background: var(--background);
    color: #F5F5F6;
    -webkit-font-smoothing: antialiased;

}

body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight:400;
}
button{
    cursor: pointer;
}


`;
