import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
  }

body{
font-family: 'Poppins', sans-serif;
}

.container {
    margin: 0 auto;
    width: 85%;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
      width: 100%;
      // background-color: lightcoral;
      padding: 15px;
    }
  }

img{
max-width: 100%;
}
`;

export default GlobalStyles;
