import React from "react";
import Header from "../../components/header";
import { HomeContainer } from "./Element.style";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <div className={styles.multiline}>
          <div className={styles.horizontalLn}></div>
        </div>
      </HomeContainer>
    </>
  );
};

export default Home;
