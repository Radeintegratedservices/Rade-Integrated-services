import styled from "styled-components";

const Terms = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 70px;
  width: 65%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }

  h1 {
    margin-bottom: 40px;
  }
  ul {
    li {
      margin-bottom: 30px;
      h1 {
        margin-bottom: 10px;
        font-size: 1.5rem;
      }
      p {
        line-height: 2;
      }
    }
  }
  span {
    line-height: 2;
    font-style: italic;
  }
`;
export { Terms };
