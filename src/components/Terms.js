/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { NavBar } from "./styles/NavBar.styled";
import { Terms } from "./styles/Terms.styled";
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
        <Terms>
          <div className="container">
            <div className="row">
              <h1>RADE INTEGRATED SERVICES LTD AGREEMENT</h1>
              <ul>
                <li>
                  <h1>DEFINITIONS</h1>
                  <p>
                    “The Company ” – means Rade Integrated Services Ltd <br />
                    “Cleaner” – means the person or firm carrying out cleaning
                    services on behalf of the Company. <br />
                    “Client” – means the person, firm or corporate body together
                    with any subsidiary or associated company as defined by the
                    Companies Act 1985 to whom the cleaning services are
                    supplied by the Company. <br /> “Service” – means the
                    cleaning services carried out on behalf of the Company
                  </p>
                </li>
                <li>
                  <h1> CONTRACT</h1>
                  <p>
                    2.1. These Terms and Conditions represent a contract between
                    Rade Integrated Services Ltd and The Client.
                    <br /> 2.2. The Client agrees that any use of The Company’s
                    services, including placing an order for services by
                    telephone, email or website forms shall constitute the
                    Client’s acceptance of these Terms and Conditions. <br />
                    2.3. Unless otherwise agreed in writing these Terms and
                    Conditions shall prevail over any other terms of business or
                    purchase conditions put forward by The Client. <br /> 2.4.
                    No variation or alteration of these Terms and Conditions
                    shall be valid unless approved in writing by a director of
                    the Company.
                  </p>
                </li>
                <li>
                  <h1> PAYMENT</h1>
                  <p>
                    3.1. All work carried out by The Company at your request,
                    whether experimental or otherwise will be charged
                    accordingly. Any work undertaken by The Company on behalf of
                    The Client is carried out on the basis that The Client has
                    fully approved such work whether or not we have received an
                    official order providing there is evidence of written or
                    verbal confirmation to proceed, including letter, facsimile
                    or email correspondence between the parties. <br /> 3.2.
                    Payments of fees rendered by invoice are due within the
                    dates stated on the invoice via, our appointed Bank. <br />
                    3.3. Interest may be applied to any overdue accounts at a
                    rate of 10%. Where payment has not been received we reserve
                    the right to withhold services, documents and information,
                    and have the right to cease to work on your account, and to
                    terminate the engagement if payments are unduly delayed.
                    <br />
                    3.4. Any expenses incurred whilst working on your behalf
                    will be charged and appropriate records will be kept and
                    will be available for inspection. Such expenses may include
                    the use of meeting rooms and other facilities, internal
                    printing, courier charges, and international but not
                    national telephone calls.
                    <br /> 3.5. Consistent late payment will incur a 20%
                    pre-payment for all future work.
                    <br /> 3.6. We have a statutory right to interest and
                    compensation for debt recovery costs under the late payment
                    legislation if not paid according to agreed credit terms.
                    The Late Payment of Commercial Debt (Interest) Act (1988)
                    states that for debts of less than £1000, the penalty is
                    £40, rising to £70 for debts up to £9,999.99 and £100 above
                    that. Interest is payable at the above rate in section 4.4.
                    The penalties and interest now apply to all businesses
                    regardless of size. <br /> 3.7. Unless otherwise expressly
                    stated, all prices shall be in Pounds Sterling and shall be
                    exclusive of VAT and other duties. <br /> 3.8. We shall
                    invoice monthly or at the end or start of a project
                    dependent on the agreed terms. <br /> 3.9. All prices are
                    Net and no settlement discount is allowed. All accounts are
                    payable no later than 10 (Ten) days from date or invoice
                    unless otherwise agreed by The Company in writing. Note that
                    the payment terms are required whether you have signed off
                    on the copy or not. <br /> 3.10. After the 10 day payment
                    period has passed all further work for The Client will
                    cease. <br /> 3.11. All quotations offered by us are deemed
                    valid for a period of 20 (Twenty) days, after which time we
                    reserve the right to revise the said quotation. <br /> 3.12.
                    We provide services on a one-off and retainer basis. <br />
                    3.13. Any additional work requested that isn’t covered in
                    the original brief will be quoted separately and added to
                    the original invoice. One month’s notice is required to
                    discontinue the service. <br /> 3.14. A deposit of 10% (the
                    "Deposit") is payable by the Client upon receiving invoice.
                    <br />
                    3.15. All Cleaning service prices are reviewed each year and
                    adjusted in line with inflation, minimum wage increases or
                    any reasonable circumstances.
                  </p>
                </li>
                <li>
                  <h1> EQUIPMENT</h1>
                  <p>
                    4.1. Cleaning materials are provided by the Company. If you
                    require us to use your solutions or equipment they must be
                    safe to use/operate, in full working order and must not
                    require any special skills to be used for the purpose of
                    cleaning. <br /> 4.2. If the Client has equipment that is
                    complicated to operate, the Client must provide clear and
                    detailed instructions to the Cleaner. <br /> 4.3. If the
                    Client requires the Cleaner to use their own materials and
                    equipment including vacuum cleaner the Company cannot accept
                    any liability should anything go wrong with either the
                    equipment or the outcome of using it.
                  </p>
                </li>
                <li>
                  <h1>CHECKLISTS</h1>
                  <p>
                    5.1. We shall provide the client a checklist on request or
                    ask all clients to leave a list of priorities for the
                    cleaner. This means that the cleaner can tick off top to
                    bottom what they are able to do within the allotted time.
                  </p>
                </li>
                <li>
                  <h1> REFUNDS</h1>
                  <p>
                    6.1. No refund claims will be given once the cleaning
                    service has been carried out. If for any reason the Client
                    is dissatisfied with any aspect they must notify the Company
                    within 24 hours and this will be rectified. <br /> 6.2.
                    Refund will be issued only if the Client has cancelled a
                    cleaning visit within the allowed time (24 hours) prior to
                    the start of the cleaning session and a payment has been
                    already received by the Company. <br /> 6.3. Refund will be
                    issued if a Cleaner does not attend a cleaning visit,
                    payment for which has been already received by the Company.
                  </p>
                </li>
                <li>
                  <h1>CANCELLATION</h1>
                  <p>
                    7.1. The Client agrees to pay the full price of the cleaning
                    visit, if: a) The Client cancels or changes the date/time
                    less than 24 hours prior to the scheduled appointment; b)
                    The Client fails to provide access to the service premises
                    thus preventing the Company to carry out the booked work; c)
                    There is a problem with the Client’s keys and the Cleaner
                    cannot let themselves in. If keys are provided they must
                    open all locks without any special efforts or skills. <br />
                    7.2. If the Client needs to change a cleaning day or time
                    the Company will do its best to accommodate them. A minimum
                    of 24 hours’ notice is required. Please note that the
                    Company cannot guarantee that the same operative will be
                    available on the new day and at the time the Client
                    requires. Any changes in the cleaning schedule are subject
                    to availability. <br /> 7.3. The Company’s cleaning
                    operatives work on any day of the week including Bank
                    Holidays. If the Client’s cleaning visit is due on a Bank
                    Holiday and she/he hasn’t called or e-mailed the Company to
                    cancel the visit 24 hours prior to the start of the cleaning
                    session, the Client agrees to and understands that the
                    regular amount due f or that cleaning visit will be charged
                    regardless of whether the cleaning operative has cleaned the
                    Client’s property or not.
                  </p>
                </li>
                <li>
                  <h1>TERMINATION</h1>
                  <p>
                    8.1. The Client may terminate this contract by giving 30
                    days prior notice in writing once the initial contracted
                    term (12 months) has ended. <br /> 8.2. If The Client wishes
                    to terminate the contract within the initial contracted term
                    (12 months), The Client must pay the outstanding balance for
                    the remainder of the contract. <br /> 8.3. The Client agrees
                    to pay a cancellation fee equivalent to 30 days service if:
                    1) No notice is given; 2) The Client provides a termination
                    of notice less than 30 days. <br /> 8.4. Prior to
                    termination of the Contract, the Client is obliged to
                    provide details of any incoming contractor for the purposes
                    of compliance with the Transfer of Undertaking (Protection
                    of Employment) Regulations 2006.
                  </p>
                </li>
                <li>
                  <h1> CLAIMS</h1>
                  <p>
                    9.1. The Company’s public liability insurance will cover
                    damages caused by a cleaning operative working on behalf of
                    the Company up to £1,000,000.00. In order to keep our prices
                    competitive all claims are subject to an excess of £100.00
                    pay able by the client. <br /> 9.2. The Client agrees that
                    due to the nature of the service the Company guarantees only
                    to correct any problems reported within 24 hours. If a
                    problem occurs on a Saturday it must be reported by Monday
                    12:00 in order to be accepted as a valid claim. Failure to
                    do so will entitle the Client to nothing. The Company may
                    require entry to the location of the claim within 24 hours
                    to correct the problem. Any refunds or adjustments must be
                    requested to the Company directly and subject to approval by
                    the Company. <br /> 9.3. The Client waives his right to stop
                    payment on his cheque unless the Company fails to make good
                    on the guarantee shown in part 13. <br /> 9.4. While the
                    Cleaners make every effort not to break items, accidents do
                    happen. Identical replacement is always attempted but not
                    guaranteed. For this specific reason, the Company requests
                    all irreplaceable items (whether monetarily or sentimentally
                    valuable) be stored away and /or not cleaned by the cleaning
                    operatives. <br /> 9.5. In case of damage, The Company will
                    repair the item at its cost. If the item cannot be repaired
                    the Company will rectify the problem by crediting the
                    customer with the item’s present actual cash value toward a
                    like replacement from a Company’s source upon payment of
                    cleaning services rendered. <br /> 9.6. The Company shall
                    not be responsible for damage due to faulty and/or improper
                    installation of any item. All surfaces (i.e., marble,
                    granite, etc.) are assumed sealed and ready to clean without
                    causing harm. <br /> 9.7. Any attempt to commit insurance
                    fraud or any use of false information to commit any type of
                    fraud will be prosecuted to the fullest extent of the law
                    together by the Company and the Insurance Provider(s).
                    Monetary compensation as well as legal fees may incur.{" "}
                    <br /> 9.8. Key replacement/locksmith fees are paid only if
                    keys are lost by our operatives. There is a £30 per location
                    liability limit.
                  </p>
                </li>
                <li>
                  <h1>COMPLAINTS</h1>
                  <p>
                    10.1. All complaints are taken seriously. If you are not
                    happy with any aspect of our service, please call us as soon
                    as possible and give us the chance to rectify it. Your
                    custom is very important to us and we want you to be happy.
                    <br />
                    10.2. If the Client is dissatisfied with a currently
                    occurring service, The Company asks that The Client notifies
                    us as soon as they notice anything that might be to their
                    dislike by calling 07405675285. Please do not wait until the
                    service is ending.
                  </p>
                </li>
                <li>
                  <h1>LIABILITY</h1>
                  <p>
                    11.1. The Company shall not be liable under any
                    circumstances for any loss, expense, damage, delay, costs or
                    compensation (whether direct, indirect or consequential)
                    which may be suffered or incurred by the Client arising from
                    or in any way connected with a late arrival of Company
                    operatives at the service address. The Company endeavors to
                    be right on time on any visit but sometimes due to transport
                    related and other problems which are beyond the Company’s
                    control, the Company operative’s may arrive with a delay or
                    the cleaning visit may be re-scheduled. <br /> 11.2. The
                    Company shall not be liable under any circumstances f or any
                    loss, expense, damage, delay, costs or compensation (whether
                    direct, indirect or consequential) which may be suffered or
                    incurred by the Client arising from or in any way connected
                    with – 1. A cleaning job not complete due to the lack of hot
                    water or electricity 2. Third party entering or present at
                    the Client’s premises during the cleaning process. <br />
                    11.3. Any existing damage to Clients property in the form of
                    old stains/burns/spillages etc. which cannot be
                    cleaned/removed completely by the cleaning operative. Any
                    damages worth £100.00 or less.
                  </p>
                </li>
                <li>
                  <h1>SUPPLEMENTARY TERMS</h1>
                  <p>
                    12.1. If the Client requests keys to be collected by the
                    Company’s operatives from a third party’s address, then a
                    £5.00 charge will apply. The charge will cover only the
                    pickup of keys. If said key(s) need to be returned back to
                    the third party ’s address or any other address additional
                    charge of £5.00 will apply. <br /> 12.2. The Company ,
                    reserves the right to re-evaluate rates at any time should
                    the Client’s initial list of tasks changes. <br /> 12.3. The
                    Company reserves the right to amend the initial quotation,
                    should the Client’s original requirements change. <br />{" "}
                    12.4. If any estimates of how long it will take the cleaning
                    operatives to complete the job are being provided those are
                    only estimates based on the average time it takes to clean a
                    home or an office of similar size to the Client’s, it being
                    difficult to calculate precisely how long such tasks may
                    take and that a degree of flexibility may be required.
                    Please note that one off cleans may take longer to complete
                    due to longer intervals between cleaning sessions, number
                    and type of cleaning tasks required, when compared to the
                    regular maintenance cleaning of the same property. <br />{" "}
                    12.5. The Client understands that the price he has been
                    quoted may vary according to condition of property and room
                    sizes etc. <br /> 12.6. The Company shall endeavor to
                    arrange a replacement cleaner if your regular cleaner cannot
                    attend a scheduled visit, and will inform the Client prior
                    to the visit. <br /> 12.7. Post Construction Cleaning
                    (Builders Cleaning), Event Cleaning or badly neglected homes
                    may take up to three times longer than a well maintained
                    home requiring general cleaning. Therefore the Company
                    advises the Client to ask for our specialist cleaning
                    services: Builders Cleaning or Event Cleaning. <br /> 12.8.
                    The cleaning operatives are not allowed to hand wash any
                    items of clothing belonging to the Client. The Company
                    advises that our operatives can only use a washing machine
                    for such tasks. <br /> 12.9. All fragile and highly
                    breakable items must be secured or removed.
                    <br /> 12.10. The Company reserves the right to make
                    reasonable changes to the Terms and Conditions in agreement
                    with the other party.
                  </p>
                </li>
                <li>
                  <h1> OUR GUARANTEE</h1>
                  <p>
                    13.1. The Company has built its business and reputation by
                    providing its clients with the best possible cleaning
                    service available. Still, the Company realizes, that because
                    its operatives are human beings, they sometimes make
                    mistakes. For this reason, the Company offers a Guarantee.
                    If the Client is not satisfied with any areas that have been
                    cleaned, the Company’s operative will come back to the
                    Client’s premises and re-clean those areas free of charge.
                  </p>
                </li>
              </ul>
              <span>
                Please note that this guarantee will not apply if the condition
                of the premises has deteriorated since the original cleaning was
                undertaken.
              </span>
            </div>
          </div>
        </Terms>
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
