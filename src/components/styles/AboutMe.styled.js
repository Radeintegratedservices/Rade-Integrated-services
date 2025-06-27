import styled from "styled-components";

const AboutMe = styled.section`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 1150px;
  }
  
  .row {
    display: flex;
    height: 600px;
    margin-bottom: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      text-align: center;
    }

    .col-1 {
      height: 600px;
      width: 45%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }

      img {
        max-width: 100%;
        width: 100%;
        height: 600px;
      }
    }
    .col-2 {
      font-family: "Poppins", sans-serif;
      padding: 0 0 0 100px;
      height: 500px;
      width: 60%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 50px;
        padding: 0 20px;
      }

      h3 {
        color: ${({ theme }) => theme.color.lightBlue};
        margin-bottom: 20px;
      }

      h1 {
        line-height: 1.2;
        font-size: 3.1rem;
        margin-bottom: 20px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.darkBlue};

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 2rem;
        }
      }

      p {
        color: ${({ theme }) => theme.color.darkBlue};
        line-height: 1.5;
        margin-bottom: 40px;
        opacity: .7;
      }

      .btn {
        position: relative;
        /* Move overflow: hidden here to only affect the button */
        overflow: hidden;
        z-index: 1;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        padding: 20px 45px;
        border: none;
        border-radius: 35px;
        color: rgb(0, 0, 0);
        font-weight: bold;
        background-color: rgb(252, 210, 0);
        box-shadow: 0 8px 24px 0 rgba(0,0,0,0.08);
        transition: color 0.3s cubic-bezier(0.4,0,0.2,1);


        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.2) 100%);
          transform: skewX(-20deg);
          z-index: 2;
          transition: none;
          opacity: 0
        }

        &:hover {
          color: #fff;
        }
        &:hover::after {
          opacity: 1;
          animation: shine 0.8s forwards;
        }
      }

      @keyframes shine {
        0% {
          left: 0;
        }
        60% {
          left: 120%;
        }
        100% {
          left: 120%;
        }
      }
    }
  }
`;
export { AboutMe };
