import styled from "styled-components";
const WhyChooseUs = styled.section`
  display: flex;
  margin-bottom: 100px;
  height: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-top: 100px;
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
      width: 35%;
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

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 2rem;
        }
      }

      p {
        line-height: 1.7;
        margin-bottom: 10px;
      }
      .btn {
        margin-top: 50px;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        padding: 20px 45px;
        border: none;
        border-radius: 35px;
        color: rgb(0, 0, 0);
        font-weight: bold;
        background-color: rgb(252, 210, 0);
      }
    }
    .col-2 {
      width: 30%;
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
      width: 35%;
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
        margin-bottom: 30px;
        img {
          margin-bottom: 10px;
        }
        h2 {
          margin-bottom: 10px;
          color: ${({ theme }) => theme.color.darkBlue};
        }
      }
    }
  }
`;
export { WhyChooseUs };
