/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { NavBar } from "./styles/NavBar.styled";
import { ShowCase } from "./styles/ShowCase.styled";
import { Service } from "./styles/Service.styled";
import { Footer } from "./styles/Footer.styled";
import logo from "./assets/rade-color.png";

const Services = () => {
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
            <h1>Services</h1>
            <p>Home / Services</p>
          </div>
        </ShowCase>
        <Service>
          <div className="container">
            <div className="row">
              <img src={logo} alt="" width="150px" height="50px" />
              <h1>Your Solution for Professional Cleaning Services</h1>
              <h3>What We Do</h3>
              <div className="services">
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/7641351/pexels-photo-7641351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="content">
                    <h3>Residential Cleaning</h3>
                    <p>
                      Restore freshness and hygiene to your space with our
                      thorough cleaning services that reach every nook and
                      cranny.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Commercial Cleaning</h3>
                    <p>
                      Create a professional workspace for your employees and
                      visitors with our customized office cleaning solutions.
                      You Can also Impress your guests and secure positive
                      reviews with our meticulous Airbnb cleaning services that
                      ensure a welcoming stay.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Domestic Cleaning</h3>
                    <p>
                      Maintain a clean and organized environment with our
                      regular weekly/Fortnightly/Monthly cleaning services to
                      stay on top of household chores. Our Tailored cleaning
                      schedules to fit your lifestyle, with flexible options.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/1253800/pexels-photo-1253800.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Carpet Cleaning</h3>
                    <p>
                      Revive and rejuvenate your carpets with our professional
                      carpet cleaning services that leave them looking as good
                      as new.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/30465632/pexels-photo-30465632/free-photo-of-abstract-black-and-white-urban-worker-artwork.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Window Cleaning</h3>
                    <p>
                      Get ready to shine! We bring your windows to life with our
                      expert cleaning service.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Oven Cleaning </h3>
                    <p>
                      We remove grease, grime, and burnt residue, restoring
                      shine and efficiency. Our expert oven cleaning service
                      ensures a spotless oven using safe solutions for a
                      healthier kitchen.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/7534297/pexels-photo-7534297.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Hob/Extractor Cleaning</h3>
                    <p>
                      With numerous five-star reviews, we have expertly cleaned
                      a wide range of ovens, including gas and electric, to our
                      sparkling best. If you’re looking for professional oven
                      cleaning near you, look no further than our team.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
                <div className="service">
                  <img
                    src="https://images.pexels.com/photos/6169661/pexels-photo-6169661.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <div className="content">
                    <h3>Man & Van Services</h3>
                    <p>
                      Moving can be a hassle, but with our man and van services,
                      you can trust us to handle the heavy lifting and transport
                      of your belongings with car and efficiency.
                    </p>
                    {/* <button>Read More</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Service>
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

export default Services;
