import React from "react";
import Button from "../button/Button";
import { MainHeader, HeaderWrap, LogoContainer, Nav } from "./Header.styles";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
// SCSS modules
import styles from "./styles.module.scss";
// Images
import LogoImage from "../../images/TheGuardianLogo.png";
// Links
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <MainHeader>
        <HeaderWrap>
          <div>
            <h2>Support the Guardian</h2>
            <h4>Available for everyone, funded by readers</h4>
            <div style={{ marginBlockStart: "0.6rem" }}>
              <Button
                className={styles.linkButton}
                style={{ marginInlineEnd: "1rem" }}
                type="link"
                href="https://github.com/joao-alvarenga"
              >
                GitHub <AiOutlineArrowRight className={styles.arrowIcon} />
              </Button>
              <Button
                className={styles.linkButton}
                type="link"
                href="https://www.linkedin.com/in/jo%C3%A3o-alvarenga/"
              >
                LinkedIn <AiOutlineArrowRight className={styles.arrowIcon} />
              </Button>
            </div>
          </div>
          <LogoContainer>
            <img
              src={LogoImage}
              alt="The Guardian logo"
              className={styles.logo}
            />
          </LogoContainer>
        </HeaderWrap>
        <Nav>
          <nav>
            <ul>
              <li>
                <Link className={styles.navLink} to="">
                  News
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="">
                  Opinion
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="">
                  Sport
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="">
                  Culture
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </nav>
        </Nav>
      </MainHeader>
    </div>
  );
};

export default Header;
