import React from "react";
import Button from "../button/Button";
import { MainHeader, MainNav } from "./Header.styles";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";
// SCSS modules
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div>
      <MainHeader>
        <MainNav>
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
        </MainNav>
      </MainHeader>
    </div>
  );
};

export default Header;
