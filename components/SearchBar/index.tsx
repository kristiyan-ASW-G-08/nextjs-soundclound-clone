/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from "react";
import "./styles.scss";

const SearchBar: FC = () => (
  <form>
    <input id="search " name="search" type="text" list="tracks" />
    <datalist id="tracks" />
  </form>
);

export default SearchBar;
