/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { NavBar } from "./styles/NavBar.styled";
import { ShowCase } from "./styles/ShowCase.styled";
import { ContactInfo } from "./styles/ContactInfo.styled";
import { MapSection } from "./styles/MapSection.styled";
import { Footer } from "./styles/Footer.styled";
import logo from "./assets/rade-color.png";

const Contact = () => {
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
            <h1>Contact Us</h1>
            <p>Home / Contact Us</p>
          </div>
        </ShowCase>
        <ContactInfo>
          <div className="container">
            <div className="row">
              <div className="col-1">
                {/* <h3>Contact Information</h3> */}
                <h1>Have Any Question? Contact Us</h1>
                <ul>
                  <li>
                    <span>
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <a href="">07769593945, 07405675285</a>
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <a href="">info@radeintegratedservices.co.uk</a>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                <h2>Get in Touch</h2>
                <form action="">
                  <textarea
                    name=""
                    id=""
                    placeholder="Your Comment*"
                  ></textarea>
                  <div className="mail">
                    <input type="text" name="" id="" placeholder="Your Name*" />
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Your Email*"
                    />
                  </div>
                  <input type="button" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
        </ContactInfo>
        <MapSection>
          <div className="container">
            <h2>Areas We Cover</h2>
            <p>
              All cities in South Yorkshire, West Yorkshire, North Yorkshire,
              East Yorkshire, East Midlands and Greater Manchester.
            </p>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d607387.8547864086!2d-1.5231894547241804!3d53.51118315676702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1746381350417!5m2!1sen!2sng"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </MapSection>
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

export default Contact;
