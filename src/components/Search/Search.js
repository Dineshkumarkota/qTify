import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../assests/Search-icon.png";
function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.search} required placeholder={placeholder} />
      <button className={styles.searchButton} type="submit">
        <img src={SearchIcon} alt="Search Icon" className={styles.icon} />
      </button>
    </form>
  );
}
export default Search;
