import * as React from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../redux';
import styles from "./Content.module.css";
import { useTypedSelector } from './../../hooks/useTypedSelector';

const Content = () => {
  const name = useTypedSelector(state => state.users.searchName);
  const users = useTypedSelector(state => state.users.users);

  return (
    <div className={styles.content}>
      <h1 className={styles.content_header}>Content</h1>
      <ul>
        {name 
          ? <div>{name}</div>
          : users.map((user: any) => <li key={user}>{user}</li>)
        }
      </ul>
    </div>
  );
};

export default Content;
