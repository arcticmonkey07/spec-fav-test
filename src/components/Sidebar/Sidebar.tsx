import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Sidebar.module.css";
import { routes } from '../../router/index';

const Sidebar = ({ toggleMenuHandler, isMenuVisible }) => {
  const isMenuVisibleClass = isMenuVisible ? styles.sidebar_active : "";
  
  return (
    <div
      className={`${styles.sidebar} ${isMenuVisibleClass}`}
      onMouseEnter={toggleMenuHandler}
      onMouseLeave={toggleMenuHandler}
    >
      <div className={styles.sidebar_logo}>
        <span className={styles.company_logo}></span>
        {isMenuVisible ? (
          <div className={`${styles.company_name} ${styles.company_name_active}`}>Honest Company</div>
        ) : (
          <div className={styles.company_name}>Honest Company</div>
        )}
      </div>
      {routes.map((route) => {
        return (
          <div className={styles.sidebar_item} key={route.path}>
            <div className={styles.sidebar_avatar}></div>
            {isMenuVisible ? (
              <Link
                to={route.path}
                className={`${styles.sidebar_name} ${styles.sidebar_name__active}`}
                key={route.path}
              >
                {route.name}
              </Link>
            ) : (
              <p className={styles.sidebar_name}></p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
