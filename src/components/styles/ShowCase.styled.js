import styled from "styled-components";

const ShowCase = styled.div`
  width: 100%;
  height: 500px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: rgb(255, 255, 255);
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 3rem;
    }
  }
`;

export { ShowCase };
