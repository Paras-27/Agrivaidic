import React from "react";

const Objective = () => {
  return (
    <div
      className="ho bgded overlay"
      style={{backgroundColor: 'rgb(30, 29, 29)', fontSize: '21px'}}
    >
      <section id="testimonials" className="hoc container clear">
        <div className="">
          <h2 className="heading center">OBJECTIVE</h2>
          <br />
          <p style={{fontSize:'20px'}}>
            Sustainable business model to improve the healthy eating habits with
            our strategic integration and supply chain plan with a vision to
            make Healthy Eating Goals as part of every individual's lifestyle.We
            started developing AVI with an aim to help farmers in selling their
            produce directly and involve them into the value chain
            effectively.Integration to minimize unnecessary interference of
            intermediaries and that is why we intend to spread a word that "We
            are not a business selling food but we share the blessings of the
            farmers’ family" © AVI.
            <br />
            <br />
          </p>
          <ol style={{listStyle: 'circle', fontSize: '20px'}}
          >
            <li>
              A sustainable startup with a vision to make Healthy Eating Goals
              as part of every individuals lifestyle.
            </li>
            <br />
            <li>
              We take not only the quality but also the nutritional value in to
              consideration for every product or service.
            </li>
            <br />
            <li>
              We aim to help farmers to get into mainstream of the supply chain
              through integration.
            </li>
            <br />
            <li>
              We are not merely a business selling food, we are sharing
              blessings of the farmers' family.
            </li>
          </ol>
          <p></p>

          <br />
          <br />
          <div className="heading center">
            <img src="images/Logo.jpg" alt="" />{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Objective;
