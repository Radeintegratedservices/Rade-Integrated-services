import styled from "styled-components";
const WhyChooseUs = styled.section`
  display: flex;
  margin-bottom: 100px;
  height: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    height: 1700px;
  }

  .row {
    display: flex;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      text-align: center;
    }

    .col-1 {
      width: 33.3%;
      padding: 20px 30px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        padding: 20px 20px;
      }

      h3 {
        color: ${({ theme }) => theme.color.lightBlue};
        margin-bottom: 20px;
      }

      h1 {
        font-family: "Poppins", sans-serif;
        line-height: 1.3;
        font-size: 2.5rem;
        margin-bottom: 20px;
        font-weight: 700;
        color: ${({ theme }) => theme.color.darkBlue};

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 14px;
        line-height: 1.7;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.color.darkBlue};
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

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          transition: background 0.4s cubic-bezier(0.4,0,0.2,1);
        }

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
    .col-2 {
      width: 33.3%;
      // padding: 0 20px;
      background-color: rgb(255, 255, 255);

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 50px;
      }

      img {
        max-width: 100%;
        width: 100%;
        height: 550px;
      }
    }
    .col-3 {
      font-family: "Poppins", sans-serif;
      width: 33.3%;
      padding: 0 30px;
      margin-bottom: 100px;
      height: 550px;
      display: flex;
      flex-direction: column;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 50px;
        margin-bottom: 100px;
      }

      .whychoose {
        margin-bottom: 20px;
        img {
          margin-bottom: 5px;
        }
        h2 {
          margin-bottom: 10px;
          color: ${({ theme }) => theme.color.darkBlue};
        }
        p{
          color: ${({ theme }) => theme.color.darkBlue};
          font-size: 14px;
          opacity: .7;
        }
      }
    }
  }
`;
export { WhyChooseUs };
