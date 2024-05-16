import React from "react";

const Footer = () => {
  return (
    <>
      <div className="wrapper row4">
        <footer id="footer" className="hoc clear">
          <div className="one_quarter first">
            <h6 className="title">Terms &amp; Condtions</h6>
            <ul className="nospace linklist ">
              <li>
                <i className="">
                  <a href="pp">Privacy Policy</a>
                </i>
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="ToS">Terms &amp; Service</a>{" "}
                </i>{" "}
              </li>
            </ul>
          </div>
          <div className="one_quarter">
            <h6 className="title">Contact AVI</h6>
            <ul className="nospace linklist footer-sectiont">
              <div className="">
                <li>
                  {" "}
                  <i>
                    <a href="/#">Careers</a>
                  </i>{" "}
                </li>
                <li>
                  <a href="mailto:hr@agrivaidic.in">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="mailto:hr@agrivaidic.in"> Mail us</a>
                </li>
                <li className="">
                  <ul className="socialMedia">
                    <li className="">
                      <a href="https://www.facebook.com/AgriVaidic/">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://www.instagram.com/agrivaidic/">
                        <i className="fab fa-instagram-square"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://twitter.com/agrivaidic">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                    </li>
                    <li className="ms-2">
                      <a href="https://www.linkedin.com/showcase/agrivaidic/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
          <div className="one_quarter ">
            <h6 className="title">Organization</h6>
            <ul className="nospace linklist ">
              <li>
                <i className="">
                  <a href="https://aviarogya.in/">AVIArogya</a>
                </i>
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="https://lazyyoga.in/">LazyYoga</a>{" "}
                </i>{" "}
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="https://www.risingindia.in/">RisingIndia</a>{" "}
                </i>{" "}
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="https://tahk.in/">Sustainability</a>{" "}
                </i>{" "}
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="https://soilless.in/">Soilless</a>{" "}
                </i>{" "}
              </li>
            </ul>
          </div>
          <div className="one_quarter ">
            <h6 className="title">AVI links</h6>
            <ul className="nospace linklist ">
              <li>
                <i className="">
                  <a href="agriculture">Agriculture &amp; Farming</a>
                </i>
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="fmcg">FMCG</a>{" "}
                </i>{" "}
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="nutrition">Nutrition Managment</a>{" "}
                </i>{" "}
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="chef">Chefs &amp; Culinary</a>{" "}
                </i>{" "}
              </li>
              <li>
                <i className="">
                  {" "}
                  <a href="yoga">Yoga &amp; Wellness</a>{" "}
                </i>{" "}
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">
          <p className="fl_left">All Rights Reserved. © </p>
          <p className="fl_right">2024 AgriVaidic Integration</p>
        </div>
      </div>
        <a id="backtotop" href="#top">
          <i className="fa fa-chevron-up"></i>
        </a>
    </>
  );
};

export default Footer;
