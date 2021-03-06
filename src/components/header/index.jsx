import React from "react";
import Button from "../button";
// styled components
import {
  MainHeader,
  HeaderWrap,
  LogoContainer,
  Nav,
  TopBarContainer,
} from "./Element.styles";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
// SCSS modules
import styles from "./styles.module.scss";
// Images
import LogoImage from "../../images/TheGuardianLogo.png";
// Links
import { NavLink, Link } from "react-router-dom";

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
          <TopBarContainer>
            <Link className="topBarLink">
              <span>
                <FaUserCircle className="topBarIcons" />
              </span>
              Sign In
            </Link>
            <Link className="topBarLink">
              <span>
                <AiOutlineSearch className="topBarIcons" />
              </span>
              Search
              <RiArrowDownSLine className="ArrowIcon" />
            </Link>
          </TopBarContainer>
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
                <NavLink
                  exact
                  activeClassName={styles.active}
                  className={styles.navLink}
                  to="/"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  className={styles.navLink}
                  to="/opinion"
                >
                  Opinion
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  className={styles.navLink}
                  to="/sport"
                >
                  Sport
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  className={styles.navLink}
                  to="/culture"
                >
                  Culture
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={styles.active}
                  className={styles.navLink}
                  to="/lifestyle"
                >
                  Lifestyle
                </NavLink>
              </li>
            </ul>
          </nav>
        </Nav>
      </MainHeader>
    </div>
  );
};

export default Header;
