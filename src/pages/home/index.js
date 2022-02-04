import React from "react";
// import components
import Header from "../../components/header";
// import style js and scss
import { HomeContainer } from "./Element.style";
import styles from "./styles.module.scss";
// import helmet lib
import { Helmet } from "react-helmet";
// import Api key
import { Api } from "../../enviroment/index";
import { Url } from "../../enviroment/index";
import { UrlSection } from "../../enviroment/index";
import { UrlSearch } from "../../enviroment/index";

// const page = () => {

// }

// console.log("here", `${Api}`);

const Home = () => {
  return (
    <>
      {/* Head */}
      <Helmet>
        <title>
          News, sport and opinion from the Guardian's global edition | The
          Guardian
        </title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Latest international news, sport and comment from the Guardian"
        />
      </Helmet>
      {/* Head */}

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
