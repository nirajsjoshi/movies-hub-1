import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import Button from "../Button/index";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/" onClick={()=>{
          window.reload();
        }}>
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        {/* <Button text="Sign Out" /> */}
      </Content>
    </Wrapper>
  );
};

export default Header;
