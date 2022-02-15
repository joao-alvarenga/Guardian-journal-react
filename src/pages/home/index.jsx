import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// import components
import Header from "../../components/header";
import Headline from "../../components/headline";
// import style js and scss
import { HomeContainer, MainSection } from "./Element.style";
import styles from "./styles.module.scss";
// import helmet lib
import { Helmet } from "react-helmet";
// import Api key and Api endpoints
import { Api } from "../../enviroment/index";
import { Url } from "../../enviroment/index";
import MainContainer from "../../components/wrapper";

const Home = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${Url + Api}`)
      .then((response) => {
        if (response.data) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error("error", error);
        setError(error);
      })
      .finally(() => {
        console.log("loading");
        setLoading(false);
      });
  }, []);

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
      <MainContainer>
        <div className={styles.multiline}>
          <div className={styles.horizontalLn}></div>
        </div>
        <MainSection>
          <Headline>Headlines</Headline>
        </MainSection>
      </MainContainer>
    </>
  );
};

export default Home;
