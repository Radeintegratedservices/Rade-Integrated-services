import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  height: 400px;
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 900px;
    flex-direction: column;
  }
  .row {
    background-color: rgba(219, 219, 219, 0.9);
    width: 100%;

    .main_footer {
      display: flex;
      margin-top: 50px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        // text-align: center;
      }

      .section {
        width: 25%;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 100%;
        }
        h3 {
          margin-bottom: 30px;
          color: rgb(11, 62, 144);
        }
      }
      .section.about_us {
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          margin-bottom: 40px;
        }
        p {
          font-family: "Roboto", sans-serif;
          line-height: 2;
          opacity: 0.5;
          padding-right: 30px;
        }
      }
      .section.services {
        margin-left: 40px;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          margin-bottom: 40px;
          margin-left: 0;
        }
        ul {
          padding: 0;
          list-style: none;
          li {
            &:hover {
              color: green;
            }
            i {
              margin-right: 15px;
              opacity: 0.5;
            }
            a {
              text-decoration: none;
              color: #000;
              opacity: 0.5;
              line-height: 2.2;
              &:hover {
                color: green;
              }
            }
          }
        }
      }
      .section.contact_info {
        margin-left: -35px;
        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
          margin-bottom: 40px;
          margin-left: 0;
        }
        p {
          a {
            text-decoration: none;
            color: rgb(0, 0, 0);
            opacity: 0.5;
          }
        }
        .main_contact {
          ul {
            margin-top: 20px;
            list-style: none;
            padding: 0;
            li {
              line-height: 2;
              a {
                span:first-child {
                  color: #279e64;
                  margin-right: 10px;
                }
                font-size: 0.9rem;
                margin-right: 10px;
                text-decoration: none;
                color: rgba(0, 0, 0, 0.5);
              }
            }
          }
        }
      }
      .section.newsletter {
        p {
          opacity: 0.5;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        div input[type="text"] {
          width: 100%;
          height: 40px;
          margin-top: 20px;
          margin-bottom: 20px;
          border: none;
          padding: 25px 15px;
        }
        div input[type="submit"] {
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          color: #fff;
          background-color: #279e64;
          width: 80%;
          height: 60px;
          border: none;
          border-radius: 30px;
        }
      }
    }
  }
`;

export { Footer };
