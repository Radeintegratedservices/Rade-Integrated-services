import styled from "styled-components";

export const GoogleFormContainer = styled.div`
  display: flex;
  justify-content: center;  
  width: 40%;
  max-width: 500px;
  height: 580px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 10px 12px 10px rgba(0,0,0,0.1);
  padding: 20px;
  overflow: hidden;
  animation: fadeInRight 1s ease;

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
  iframe {
    border-radius: 10px;
    border: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      margin-top: 100px;
      height: 680px;

    }
`;