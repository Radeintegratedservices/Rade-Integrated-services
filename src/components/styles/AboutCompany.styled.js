import styled from "styled-components";

const AboutCompany = styled.section`
  .col-1 {
    h3 {
      color: ${(props) => props.theme.color.lightBlue};
      margin-bottom: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
      }
    }
    h1 {
      width: 80%;
      font-size: 3.3rem;
      color: ${(props) => props.theme.color.darkBlue};
      margin-bottom: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        text-align: center;
      }
    }
  }
  .col-2 {
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
    }
    margin-bottom: 50px;
    .first {
      width: 50%;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
      }
      p {
        color: rgb(148, 148, 148);
        line-height: 1.9;
      }
    }
    .second {
      width: 50%;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        margin-top: 50px;
      }
      color: rgb(148, 148, 148);

      ul {
        list-style: none;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          padding: 0;
        }
        li {
          display: flex;
          justify-contents: center;
          align-items: center;
          margin-bottom: 25px;

          span i {
            padding-right: 10px;
            font-size: 1.5rem;
            color: green;
          }
        }
      }
    }
  }
`;

export { AboutCompany };
