import React from "react";

const Header = () => {
  return (
    <div
      className="bgded"
      style={{ backgroundImage: "url('images/Wheat.jpg')" }}
    >
      <div className="wrapper overlay">
        <header id="header" className="hoc clear">
          <nav id="mainav" className="clear">
            <ul className="clear">
              <li className="active">
                <a href="index">Home</a>
              </li>
              <li>
                <a className="" href="agriculture">
                  Agriculture
                </a>
                <ul>
                  <li>
                    <a href="/#">Zero-Budget Farming</a>
                  </li>
                  <li>
                    <a href="/#">Hydroponics</a>
                  </li>
                  <li>
                    <a href="/#">Aeroponics</a>
                  </li>
                  <li>
                    <a href="/#">Farmer's Community</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="" href="fmcg">
                  FMCG
                </a>
              </li>
              <li>
                <a href="nutrition">nutrition</a>
              </li>
              <li>
                <a href="chef">chef</a>
              </li>
              <li>
                <a href="yoga">Yoga</a>
              </li>
              <li>
                <a href="avithon">AVITHON</a>
              </li>
            </ul>
          </nav>
          <div id="logo">
            <h1>
              <a href="index">AgriVaidic Integration</a>
            </h1>
            <br />
            <p>
              “we are not a business selling food but we share the blessings of
              the farmers’ family” © avi
            </p>
          </div>
        </header>
      </div>
      <div id="pageintro" className="hoc clear">
        <article>
          <div className="introtxt">
            <h2 className="heading">About the Venture:</h2>
            <p>
              An initiative to help bring direct farm produce to home in the
              utmost sustainable and organic way. "To unleash potential of
              Indian agriculture and food tech business to add value in farming
              and for reputation of farmers." A sustainable startup as we take
              not only the quality but also the nutritional value into
              consideration for every product or service.
            </p>
          </div>
          <footer>
            <ul className="nospace inline pushright">
              <li>
                <a
                  className="btn inverse"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSftCbzRvdnBzc0dSFd1sa1DOJqDCbng9y_9hnyicLQ6AQrikw/viewform"
                >
                  Are you eating healthy?
                </a>
              </li>
              <li>
                <a className="btn" href="AVI">
                  Join us
                </a>
              </li>
            </ul>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Header;
