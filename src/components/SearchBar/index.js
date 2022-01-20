import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from "../../images/search-icon.svg";
import Button2 from "../Button/index2";

//Styles
import { Wrapper, Content } from "../SearchBar/SearchBar.styles";

const SearchBar = ({ setSearchTerm, signoutCallback }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
        <Button2 text="Sign Out" callback={signoutCallback} />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
