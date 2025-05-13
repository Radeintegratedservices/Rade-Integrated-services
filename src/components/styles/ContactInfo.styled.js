import styled from "styled-components";

const ContactInfo = styled.div`
  .row {
    display: flex;
    height: 500px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      flex-direction: column;
      height: 800px;
    }
  }
  .col-1 {
    font-family: "Poppins", sans-serif;
    padding: 20px;
    width: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      text-align: center;
    }

    h3 {
      color: ${(props) => props.theme.color.lightBlue};
    }
    h1 {
      color: ${(props) => props.theme.color.darkBlue};
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 20px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.5rem;
      }
    }
    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span {
          color: ${(props) => props.theme.color.lightBlue};
          margin-right: 30px;
          font-size: 1.5rem;
        }
        a {
          color: ${(props) => props.theme.color.darkBlue};
          text-decoration: none;
        }
      }
    }
  }
  .col-2 {
    padding: 20px;
    height: 200px;
    width: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      text-align: center;
      height: 300px;
    }

    h2 {
      margin-bottom: 20px;
    }

    textarea {
      font-family: "Poppins", sans-serif;
      padding: 20px;
      width: 100%;
      height: 200px;
      margin-bottom: 20px;
    }
    .mail {
      display: flex;
      justify-content: space-between;

      input {
        font-family: "Poppins", sans-serif;
        padding: 0 20px;
        height: 50px;
        margin-bottom: 20px;
        width: 48%;
      }
    }
    input[type="button"] {
      border: none;
      padding: 20px 60px;
      border-radius: 25px;
      background-color: rgb(252, 210, 0);

      &:hover {
        background-color: ${(props) => props.theme.color.darkBlue};
        color: #fff;
      }
    }
  }
`;

export { ContactInfo };
