import styled from "styled-components";

const NavBar = styled.div`
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");

margin-bottom: 30px;

color: ${(props) => props.theme.color.slate1000};
background: #fff;
  #header_wrap {
  position: relative;
  font-family: "Roboto", sans-serif;
    width: 100%;
  }

  .header_top {
    color: ${(props) => props.theme.color.darkBlue};
    height: 90px;
    display: flex;
    align-items: center;

    .header_top_inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header_top_left {
      display: flex;
      direction: row;
      position: relative;

      .email {
        display: flex;
        margin-right: 60px;

        a {
          margin-right: 20px;
          font-size: 25px;
          color: ${(props) => props.theme.color.darkBlue};
        }
        p {
          line-height: 1.5;
          font-size: .9rem;


          @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: none;
          }
        }
      }

      .phone {
        display: flex;

        a {
          margin-right: 20px;
          font-size: 25px;
          color: ${(props) => props.theme.color.darkBlue};
        }
        p {
          line-height: 1.5;
          font-size: .9rem;


          @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: none;
          }
        }
      }
    }

    .header_top_right {
      display: flex;
      align-items: center;
      position: relative;

      p{
          font-size: .9rem;

          @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
            // visibility: hidden;
            display: none;
          }
      }

      .top_right_button a {
        background-color: ${(props) => props.theme.color.darkBlue};
        border-radius: 40px;
        margin-left: 20px;
        padding: 15px 30px;
        text-decoration: none;
        color: #fff;

        transition: background 300ms ease-in-out;

        &:hover{
        background-color: green;
        color: #fff;
        }
      }
    }
  }

  .site_header {
    border-top: 1px solid rgba(66, 66, 66, 0.2);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 90px;
    }
    .site_branding {
      color: ${(props) => props.theme.color.darkBlue};

      img {
        width: auto;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
      }
    }

    .site_navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .main_navigation {
        .mastermenu {
          display: flex;
          position: relative;
          li {
            position: relative;
            list-style: none;
            padding: 20px 60px 20px 0;

            .nav  {
              text-decoration: none;
              color: ${(props) => props.theme.color.darkBlue};
              font-weight: bold;


              &:hover{
              border-top: 2px solid ${(props) => props.theme.color.darkBlue};
              padding-top: 34px;
              }

              &::after {
                content: "";
                position: absolute;
                margin-left: 5px;
                opacity: .5;
                font-family: "Font Awesome 6 Free";
                font-weight: 900;
              }
            }

            .sub_menu {
              visibility: hidden;
              opacity: 0;
              position: absolute;
              z-index: 99;
              top: 100%;
              padding: 20px 0;
              transition: opacity 300ms ease-in-out;
              clip: rect(1px, 1px, 1px, 1px);
              background-color: #fff;

              li {
                background-color: #fff;
                padding: 5px 40px;
                width: 220px;
                color: #000;

                a{
                font-family: "Poppins", sans-serif;
                color: ${(props) => props.theme.color.darkBlue};
                line-height: 1.5;
                text-decoration: none;

                  &:hover{
                  color:${(props) => props.theme.color.lightBlue}
                  }
                }
              }
            }
            &:hover > .sub_menu {
              visibility: visible;
              opacity: 1;
              clip: inherit;
            }
          }
        }
      }

      .right_social_icons {
        display: flex;
        a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color:${(props) => props.theme.color.grey};
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          margin-left: 10px;
          color: ${(props) => props.theme.color.darkBlue};
;
          text-decoration: none;
          transition: background-color 0.3s ease-in-out;
          transition: transform 0.2s ease-in-out;

          &:hover {
            background-color: ${({ theme }) => theme.color.lightBlue};
            animation: custom-beat 800ms infinite ease-in-out;
            color: #fff;
          }

          @keyframes custom-beat {
            0% {
              transform: scale(1);
            }
            ,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            ,
            
          }
        }
      }
    }
  }

  .mobile_header{
    display: none;
      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: block;
          }

    .mobile_row{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      
      .open-menu{
        font-size: 1.5rem;
      }

      .site_navigation{
        background-color: #fff;
        position: absolute;
        width: 100%;
        top: 80px;
        padding: 30px 15px;


        .mastermenu{
          .menu_item{
          line-height: 3;

          &::after{
            content: "";
            
          }
            a{
              text-decoration: none;
              color: ${({ theme }) => theme.color.darkBlue};
              font-family: "Poppins", sans-serif;
              font-weight: bold;
            }

            list-style: none;
            .sub_menu{
              // display: none;
              list-style: none;
                li{
                  a{
                    text-decoration: none;
                  }
                }
            
            }
          }
        }

      }
    }
  }
`;

export { NavBar };
