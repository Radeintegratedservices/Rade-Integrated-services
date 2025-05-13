import styled from "styled-components";

const MapSection = styled.section`
  font-family: "Poppins", sans-serif;
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.color.lightBlue};
    font-size: 3rem;
    margin-bottom: 10px;
  }
  iframe {
    margin-top: 30px;
    max-width: 100%;
    width: 100%;
    height: 300px;
    border: none;
  }
`;

export { MapSection };
