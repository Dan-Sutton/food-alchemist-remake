import Image from "next/image";
import styles from "./page.module.css";
import Matt from "../public/images/matt.png";
import Party from "../public/images/party.jpg";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* HEADER */}
      <section className={styles.headerSection}>
        <div className={styles.headerLeft}>
          <div className={styles.title}>
            <h1>
              THE
              <br />
              FOOD
              <br />
              ALCHEMIST
            </h1>
            <h2>BESPOKE DINING SERVICES</h2>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Image
            className={styles.headerImage}
            alt="Matt, The Food Alchemist."
            src={Matt}
          ></Image>
        </div>
      </section>
      {/* PUBLIC EVENTS */}
      <section className={styles.publicSection}>
        <div className={styles.publicLeft}>
          <Image
            className={styles.publicSectionImage}
            alt="People Dining at a party"
            src={Party}
          ></Image>
        </div>
        <div className={styles.publicRight}>
          <h2 className={styles.sectionHeading}>PUBLIC EVENTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      {/* PRIVATE HIRE */}
      <section className={styles.privateSection}>
        <div className={styles.privateLeft}>
          <Image
            className={styles.privateSectionImage}
            alt="People Dining at a party"
            src={Party}
          ></Image>
        </div>
        <div className={styles.privateRight}>
          <h2 className={styles.sectionHeading}>PRIVATE EVENTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className={styles.aboutSection}></section>
    </div>
  );
}
