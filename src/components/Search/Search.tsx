import React from "react"

import styles from "./Search.module.pcss";

const Search = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <input className={styles.inputSearch} type="search" />
    </div>);
};

export default Search;