/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { NavBar } from "./styles/NavBar.styled";
import { ShowCase } from "./styles/ShowCase.styled";
import { AboutCompany } from "./styles/AboutCompany.styled";
import { Footer } from "./styles/Footer.styled";
import logo from "./assets/rade-color.png";

const About = () => {
  const [isClick, setIsClick] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(false); // Track navigation visibility

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setIsClick(!isClick); // Toggle submenu
  };

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  return (
    <>
      <NavBar>
        <div id="NavBar_wrap">
          <div className="header_top">
            <div className="container">
              <div className="header_top_inner flex">
                <div className="top_left_content">
                  <div className="header_top_left">
                    <div className="email">
                      <a href="mailto:info@radeintegratedservices.co.uk">
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                      <p>
                        <label htmlFor="">
                          If you have any queries
                          <br />
                          info@radeintegratedservices.co.uk
                        </label>
                      </p>
                    </div>
                    <div className="phone">
                      <a href="tel:07849619190">
                        <i className="fa-solid fa-phone-volume fa-shake"></i>
                      </a>
                      <p>
                        <label htmlFor="">Have any question?</label>
                        <br />
                        "Free: 07849619190"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="header_top_right">
                  <div className="right-item time">
                    <p>Opening Hour: 9:30AM - 5:30PM</p>
                  </div>
                  <div className="right-item top_right_button">
                    <a
                      href="https://forms.gle/MqFyAiig9igqCSh68"
                      target="_self"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site_header">
            <div className="container">
              <div className="row">
                <div className="site_branding">
                  <a href="/" rel="home" title="rade">
                    <img src={logo} alt="rade" />
                  </a>
                </div>
                <div className="site_navigation">
                  <nav className="main_navigation">
                    <ul className="mastermenu">
                      <li className="menu_item">
                        <a className="nav" href="2w">
                          Services
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/services">Services</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu_item">
                        <a className="nav" href="2w">
                          Company
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/about">About us</a>
                          </li>
                          <li>
                            <a href="/our team">Our Team</a>
                          </li>
                          <li>
                            <a href="/gallery">Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu_item">
                        <a className="nav" href="2w">
                          Contact
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/contact">Contact Us</a>
                          </li>
                          <li>
                            <a href="/helps & faqs">Helps & Faqs</a>
                          </li>
                          <li>
                            <a href="/appointment">Appointment</a>
                          </li>
                          <li>
                            <a href="/terms">Terms & Conditions</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="right_social_icons">
                    <a
                      className="fa"
                      href="https://www.facebook.com/share/1L9c5YmUit/?mibextid=wwXIfr"
                      title="Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-facebook-f custom-icon"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/radeintegratedservicesltd?igsh=eGsxczI2ZmJtdGRy&utm_source=qr"
                      title="Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@radeintegratedservices?_t=ZN-8w3lzrVdp1q&_r=1"
                      title="Tiktok"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_header">
            <div className="container">
              <div className="mobile_row">
                <div className="site_branding">
                  <a href="/" rel="home" title="rade">
                    <img src={logo} alt="rade" />
                  </a>
                </div>
                <div className="open-menu" onClick={toggleNav}>
                  {/* <i class="fa-solid fa-x"></i> */}
                  {!isClick ? (
                    <i class="fa-solid fa-bars"></i>
                  ) : (
                    <i class="fa-solid fa-x"></i>
                  )}
                  {/* <i class="fa-solid fa-bars"></i>
                                        <i class="fa-solid fa-x"></i> */}
                </div>
                {isNavVisible && (
                  <div className="site_navigation">
                    <nav className="main_navigation">
                      <ul className="mastermenu">
                        <li className="menu_item">
                          <a
                            className="nav"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent jumping to top
                              toggleMenu("services");
                            }}
                          >
                            Services
                          </a>
                          {openMenu === "services" && (
                            <ul className="sub_menu">
                              <li>
                                <a href="/services">Services</a>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="menu_item">
                          <a
                            className="nav"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent jumping to top
                              toggleMenu("company");
                            }}
                          >
                            Company
                          </a>
                          {openMenu === "company" && (
                            <ul className="sub_menu">
                              <li>
                                <a href="/about">About us</a>
                              </li>
                              <li>
                                <a href="/our team">Our Team</a>
                              </li>
                              <li>
                                <a href="/gallery">Gallery</a>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="menu_item">
                          <a
                            className="nav"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent jumping to top
                              toggleMenu("contact");
                            }}
                          >
                            Contact
                          </a>
                          {openMenu === "contact" && (
                            <ul className="sub_menu">
                              <li>
                                <a href="/contact">Contact Us</a>
                              </li>
                              <li>
                                <a href="/helps & faqs">Helps & Faqs</a>
                              </li>
                              <li>
                                <a href="/terms">Terms & Conditions</a>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </NavBar>
      <main>
        <ShowCase>
          <div className="center">
            <h1>About Us</h1>
            <p>Home / About Us</p>
          </div>
        </ShowCase>
        <AboutCompany>
          <div className="container">
            <div className="col-1">
              <h3>About Company</h3>
              <h1>New Generation of Cleaning And Restoration Concepts.</h1>
            </div>
            <div className="col-2">
              <div className="first">
                <p>
                  At Rade Integrated Services Ltd, we take pride in delivering
                  exceptional cleaning services tailored to meet the diverse
                  needs of our valued clients. With a strong commitment to
                  excellence, reliability, and customer satisfaction, we have
                  established ourselves as a premier cleaning service provider
                  in the industry. Backed by a team of skilled and experienced
                  professionals, we specialize in a wide range of cleaning
                  services. Our comprehensive offerings cater to both
                  residential and commercial spaces, ensuring that every corner
                  is left spotless and sparkling. We understand the importance
                  of a clean and organized environment in enhancing the quality
                  of life and productivity. That's why we go above and beyond to
                  deliver top-notch cleaning solutions that exceed our clients'
                  expectations and create a welcoming and hygienic space for
                  all. With a customer-centric approach, attention to detail,
                  and a dedication to quality, Rade Integrated Services Ltd is
                  your go-to partner for all your cleaning needs. Let us handle
                  the dirty work while you sit back, relax, and enjoy the
                  pristine results of our professional cleaning services.
                </p>
              </div>
              <div className="second">
                <ul>
                  <li>
                    <span>
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span>
                      Regular weekly, fortnightly, four weekly domestic home
                      cleaning.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span>
                      Flexibility to meet ‘short notice’ cleaning requirements.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span>
                      Team leader supervision at house cleans ensuring quality
                      of service.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span>
                      Collections and return of property keys to owner / agent.
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span>
                      Fully trained, uniformed and employed cleaning teams.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AboutCompany>
      </main>
      <Footer>
        <div className="row">
          <div className="container">
            <div className="main_footer">
              <div className="section about_us">
                <h3>About Us</h3>
                <p>
                  At Rade Integrated Services Ltd, we deliver tailored cleaning
                  services with excellence, reliability, and customer
                  satisfation as a premier industry provider.
                </p>
              </div>
              <div className="section services">
                <h3>Best Services</h3>
                <ul>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Residential Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Domestic Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Commercial Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Carpet Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Window Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Oven Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="/services">Hob/Extractor Cleaning</a>
                  </li>
                </ul>
              </div>
              <div className="section contact_info">
                <h3>Contact Info</h3>
                <div className="main_contact">
                  <ul>
                    <li>
                      <a href="">
                        <span>
                          <i class="fa-solid fa-phone"></i>
                        </span>
                        <span>07769593945, 07405675285</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <i class="fa-solid fa-envelope"></i>
                        </span>
                        <span>info@radeintegratedservices.co.uk</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section newsletter">
                <h3>Newsletter</h3>
                <p>
                  Subcribe for all news from us. Please enter your email to form
                  below.
                </p>
                <form action="">
                  <div>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div>
                    <input
                      className="btn"
                      type="submit"
                      value="Subscribe Now"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default About;
