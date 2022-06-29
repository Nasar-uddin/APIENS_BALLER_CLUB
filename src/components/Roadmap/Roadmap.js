import React from "react";
import StyledHeading from "../StyledHeading/StyledHeading";
import styles from "./Roadmap.module.scss";

const roadmap = [
  {
    serial: ".01",
    title: "WHAT IS APIENS BALLER CLUB?",
    text: [
      "Metaverses are boring without games, and competitive games lack social connection. There needs to be a middle ground. Social gaming bridges the gap between today's Twitch culture and the future of immersive metaverses.",
      "Apiens Baller Club is a AAA social gaming metaverse that is truly player-owned and powered. Apiens Baller Club’ first game mode will be a social deduction game.",
      "The Apiens Baller Club's drop will give holders access to all Genesis Season events. Each event provides access to a different part of the BallerMataverse.",
    ],
  },
  {
    serial: ".02",
    title: "PLAY AND EARN",
    text: [
      "NFT holders will earn tradeable NFTs and fungible tokens simply from playing the game.",
    ],
  },
  {
    serial: ".03",
    title: "COMMUNITY OWNED",
    text: [
      "Apiens Baller Club (ABC) holders will own and control the future of the Apiens Baller Metaverse governed through the community DAO.",
    ],
  },
  {
    serial: ".04",
    title: "APIENS BALLER 3D AIRDROP",
    text: [
      "All Apiens Baller holders will get the opportunity to wrap their Apiens Baller into a 3D version. There will be times when you need your Apiens Baller 2D and times you’ll need it 3D. Stay tuned!",
    ],
  },
  {
    serial: ".05",
    title: "METAVERSE",
    text: [
      "The Apiens Baller Club will be extended to the Sandbox Metaverse, where the founders will buy a 3x3 land once the project is sold out. This would allow us to advertise on Sandbox and link to Opensea, which would bring more attention to the project. This land will be our HEADQUARTERS, where all the Apiens Baller Family can meet.",
    ],
  },
  {
    serial: ".06",
    title: "EVENTS",
    text: [
      "In person events for exclusive Apiens Baller Club members only. Parties and masterminds will be organized with influential people related to crypto, NFTs, investing, real estate in popular locations such as Miami, NYC, Las Vegas, Los Angeles, etc…Apiens Baller Members will be able to vote on upcoming events.",
    ],
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className={styles.roadmap}>
      <div
        className="roadmap-container container-lg"
        style={{ maxWidth: "928px" }}
      >
        <StyledHeading headingText="Roadmap" />
        <h2>WE HAVE BIG PLANS FOR APIENS BALLER CLUB</h2>
        <div className="steps cmt-99">
          {roadmap.map((step, index) => (
            <div className={styles.step} key={index}>
              <h3 className="cmb-32">
                <span className="me-2">{step.serial}</span>
                {step.title}
              </h3>
              {step.text.map((texts, index) => (
                <p key={index}>{texts}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
