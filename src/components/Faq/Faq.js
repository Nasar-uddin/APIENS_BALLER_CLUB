import React from "react";
import StyledHeading from "../StyledHeading/StyledHeading";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className="container" style={{ maxWidth: "737px" }}>
        <div className="heading cmb-32">
          <StyledHeading headingText="FAQs" />
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div className={styles.faqs}>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed justify-content-between align-items-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <span>WHAT IS AN NFT?</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  NFT stands for 'non-fungible token. An NFT is basically data
                  that is accounted for in a digital ledger, and that data
                  represents something specific and unique. An NFT can, for
                  example, represent a unique piece of art or a game token.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwp">
                <button
                  className="accordion-button collapsed justify-content-between align-items-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>How Can I Buy a APIENS NFT?</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwp"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can mint your Apiens Baller through our website
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed justify-content-between align-items-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span>HOW MUCH DOES IT COST BUY ONE OF THE APIENS?</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">Mint Price is : 0.038 ETH</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed justify-content-between align-items-start"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <span>WHY DID YOU CHOOSE APIENS?</span>
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Renowned artists Ricardo Cesar & Enrique Mateo-Sagasta have
                  after weeks of work decided to use their knowledge and
                  experience with major studios to bring a project that has
                  never be seen before to the NFT space.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
