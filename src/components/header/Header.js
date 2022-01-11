import React from "react";
import Button from "../button/Button";
import { MainHeader, MainNav } from "./Header.styles";

const Header = () => {
  return (
    <div>
      <MainHeader>
        <MainNav>
          <h2>Support the Guardian</h2>
          <h4>Available for everyone, funded by readers</h4>
          <div style={{ marginBlockStart: "1rem" }}>
            <Button
              style={{ marginInlineEnd: "1rem" }}
              type="link"
              children="GitHub"
              href="https://github.com/joao-alvarenga"
            />
            <Button
              type="link"
              children="LinkedIn"
              href="https://www.linkedin.com/in/jo%C3%A3o-alvarenga/"
            />
          </div>
        </MainNav>
      </MainHeader>
    </div>
  );
};

export default Header;
