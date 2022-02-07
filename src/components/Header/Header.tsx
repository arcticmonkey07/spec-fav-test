import * as React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Header.module.css";
import { setSearchName } from '../../redux/actions/users';
import { RootState } from '../../redux';
import { useTypedSelector } from './../../hooks/useTypedSelector';

const Header = () => {
  const dispatch = useDispatch();

  const users = useTypedSelector(state => state.users.users);
  const [searchWord, setSearchWord] = useState("");

  const onInputChange = (e) => {
    setSearchWord(e.target.value);
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      let searchName = users.filter((item: any) => {
        return item.toLowerCase().includes(searchWord.toLowerCase());
      });
      
      const newSearchName: any = [...searchName];
      dispatch(setSearchName(newSearchName));
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input
          className={styles.input_search}
          type="text"
          placeholder="Поиск..."
          value={searchWord}
          onChange={onInputChange}
          onKeyDown={searchHandler}
        />
      </div>
      <div className={styles.name_block}>
        <p className={styles.account_name}>Петров В. А.</p>
        <span className={styles.account_avatar}></span>
      </div>
    </header>
  );
};

export default Header;
