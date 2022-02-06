import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./App.module.css";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { fetchUsers } from "./redux/actions/users";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isFilterOpen, setFilterVisible] = useState(false);

  const toggleMenuHandler = () => {
    setMenuVisible(!isMenuVisible);
  };

  const openFilterHandler = () => {
    setFilterVisible(!isFilterOpen);
  };

  return (
    <div className={styles.app}>
      <Sidebar
        toggleMenuHandler={toggleMenuHandler}
        isMenuVisible={isMenuVisible}
      />
      <div className={styles.main}>
        <Header />
        <Filter
          isFilterOpen={isFilterOpen}
          openFilterHandler={openFilterHandler}
        />
        <Content />
      </div>
    </div>
  );
};

export default App;
