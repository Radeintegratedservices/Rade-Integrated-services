import styled from "styled-components";

export const GoogleFormContainer = styled.div`
  width: 40%;
  max-width: 500px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 20px;
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
`;