import styled from "styled-components";

const Service = styled.section`
  height: 1700px;
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 4550px;
  }

  .row {
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      line-height: 1.4;
      margin-top: 25px;
      margin-bottom: 15px;
      text-align: center;
      width: 60%;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.color.darkBlue};

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }
    }

    h3 {
      color: ${({ theme }) => theme.color.lightBlue};
    }

    .services {
      display: flex;
      flex-wrap: wrap;
      height: 500px;
      margin-top: 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }

      .service {
        width: 380px;
        height: 430px;
        padding: 0 15px;
        margin-bottom: 70px;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 100%;
          height: 500px;
          margin-bottom: 30px;
        }

        img {
          width: 100%;
          height: 250px;
        }

        .content {
          padding: 20px;

          h3 {
            margin-top: 5px;
            margin-bottom: 15px;
            color: ${({ theme }) => theme.color.lightBlue};
          }
          p {
            font-size: 0.8rem;
            margin-bottom: 10px;

            @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
              font-size: 1rem;
            }
          }
          button {
            font-family: "Poppins", sans-serif;
            border: none;
            padding: 10px;
            background-color: rgb(252, 210, 0);
            // margin-bottom: 50px;
          }
        }
      }
    }
  }
`;

export { Service };
