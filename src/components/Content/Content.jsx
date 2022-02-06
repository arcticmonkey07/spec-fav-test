import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Content.module.css";

const Content = () => {
  const name = useSelector(({ users }) => users.searchName);
  const users = useSelector(({ users }) => users.users);

  return (
    <div className={styles.content}>
      <h1 className={styles.content_header}>Content</h1>
      <ul>
        {name 
          ? <div>{name}</div>
          : users.map((user) => <li key={user}>{user}</li>)
        }
      </ul>
    </div>
  );
};

export default Content;
