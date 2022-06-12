import React from "react";
import StyledHeading from "../StyledHeading/StyledHeading";
import styles from "./Roadmap.module.scss";

const roadmap = [
  {
    serial: ".01",
    title: "CREATION OF THE APIENS BALLER CLUB (Archived)",
    text: "Each Of The 5209 Rare And Majestic NFT Pieces Was Created With The Same Imagination And Detail That Our Artists Created On The Blockbuster Screen. All The Features Are Authentic, So That Each Big Cat Scares The Weak Creatures Of The Metaverse. The Demand For Big Cats Has Been Enormous.",
  },
  {
    serial: ".02",
    title: "THE APIENS BALLER CLUB START TO CONQUER THE METAVERSE (Archived)",
    text: "With Their Pedigree And Majesty, Demand For The Big Cats Has Been Overwhelming — Unfortunately, We Choose To Only Maintain Their Extreme Quality For A Limited Run. Only 5209 Wise Investors Are Able To Own A Big Cat. The Focus On Quality Art And Building A Healthy Community Has Attracted Over 250,000 Members.",
  },
  {
    serial: ".03",
    title: "INTRODUCING THE KINGS OF THE PRIDE (Archived)",
    text: "Every Great Art Collection Has A Centerpiece. We Had Introduced The Kings Of Pride. These Alpha Big Cats Are The **Legendary**, Truly Rare Cats Designed By Our Artists Who Had Full Authority To Create With Maximum Ferocity And Creativity. The Kings Of The Pride Are An Ultra-Exclusive Meta-Collection Within An Already Special Collection. By Bringing Renewed Interest To The Collection, New Investors Have Been Forced To Pay Attention.",
  },
  {
    serial: ".04",
    title: "GIVING POWER BACK TO THE PRIDE",
    text: "Big Cats Always Look After Their Own, And So We Want To Give Back To The Real Cats Of The World With A Large Donation To Help Preserve Their Habitat. In Stage 4, We Commit To Sharing $50,000 To Two Different Charities. They Protect Big Cats In Tropical Environments.We Sincerely Wish To Help These Stately Creatures And Ensure Their Survival For Generations To Come.You Will Have The Power To Choose Where To Make The Donations. (To Involve And Empower All The Holders, You Will Help Us Choose The Associations.)",
  },
  {
    serial: ".05",
    title: "JUNGLE NETWORK",
    text: "Big Cats Is An NFT Collection, You Are Right, But It Is Also A Strong Community. We Know How Powerful A Community Can Be When It's Strong. We Want Everyone Who Has A Business, A Youtube Channel, An Instagram Account, To Be Helped By The Community. We Will Feature Those Who Have The Most Interesting Projects. You Will Be Able To Talk About Your Business, Find More Customers, Create Ideas And Projects With Other Big Cats Owners. It Will Turn Into A Truly Powerful Network.",
  },
  {
    serial: ".06",
    title: "MERCH",
    text: "We Want This Project To Be More Than Just An NFT Collection, We Want It To Become A Real Community. For This, We Will Make Merchandising. They Will Be Reserved For The Owners. The Goal Is To Create A Real Exclusive Community. You And Only You Can Wear It And Express That You Are Part Of The Big Cats Family.",
  },
  {
    serial: ".07",
    title: "THE APIENS BALLER CLUB EVOLVE TO THEIR FINAL FORM",
    text: "We Want To Give You Much More Than The Current JPG Of An NFT. At Stage 7, We Will Publish A Few 3D Files That You Can Use In The Metaverse. You Will Have Full Rights On Them, You Can Customize Them, Recreate Your Big Cats Or Even Create An Original One.",
  },
  {
    serial: ".08",
    title: "APIENS BALLER CLUB JOINING THE METAVERSE",
    text: "Big Cats Are Great, Big Cats Are Powerful, Big Cats Are Strong.Now The Big Cats Need A Playground. To Meet, To Enjoy, To Play Games And To Chill. After Talking With You And Receiving Your Valuable Ideas, We Want To Buy Land In The Metaverse And Turn It Into An Incredible Jungle For Our Holders.(You Will Decide Through A Poll In Which Metaverse You Want The Big Cats To Evolve).This Will Be One Of The Highlights Of Our Project And Also One Of The Most Exciting Parts. The Freedom Of Creation And Expression To Create This Jungle Will Be Incredible. The Territory Of The Big Cats In The Metaverse Will Be One Of The Most Beautiful Playgrounds.",
  },
  {
    serial: ".09",
    title: "THE APIENS TO BRING JOY IN THIS WORLD",
    text: "With Their Kindness, Cerebral Naivety And A Touch Of Carefreeness, They Will Bring Joy To Our Big Cats World. At This Point, We Truly Believe That The Project Will Be Strong Enough To Launch Little Cats. You Will Then Have A Complete Collection, With 2 NFTs Inside; One Big Cats And One Little Cats. The Launch Will Only Take Place When The Optimal Conditions Are Met To Benefit The Entire Big Cats Project.",
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
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
