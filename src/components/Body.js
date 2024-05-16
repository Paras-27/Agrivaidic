import React from "react";

const Body = () => {
  return (
    <div className="wrapper row3">
      <main className="hoc container clear">
        <div className="center btmspace-50">
          <h2 className="heading">AVI's five verticals</h2>
          <p>
            "AN OPPORTUNITY TO LEAP AN ENTREPRENEURSHIP WITH FIVE RELATED
            SECTORS."
          </p>
        </div>
        <ul className="nospace group blocks">
          <li
            className="one_quarter first bgded overlay"
            style={{backgroundImage: "url('images/Grass.jpg')"}}
          >
            <a className="btn medium" href="/#">
              Agriculture
            </a>
            <br />
          </li>
          <li
            className="one_quarter bgded overlay"
            style={{backgroundImage: "url('images/shopping.jpg')"}}
          >
            <a className="btn medium" href="/#">
              FMCG
            </a>
            <br />
          </li>
          <li
            className="one_quarter bgded overlay"
            style={{backgroundImage: "url('images/Fruits.jpg')"}}
          >
            <a className="btn medium" href="/#">
              nutrition
            </a>
            <br />
          </li>
          <li
            className="one_quarter bgded overlay"
            style={{backgroundImage: "url('images/Chef.jpg')"}}
          >
            <a className="btn medium" href="/#">
              Chefs
            </a>
            <br />
          </li>
          <li
            className="one_quarter bgded overlay"
            style={{backgroundImage: "url('images/Yoga.jpg')"}}
          >
            <a className="btn medium" href="/#">
              LazyYoga
            </a>
            <br />
          </li>
        </ul>

        <div className="clear"></div>
      </main>
    </div>
  );
};

export default Body;
