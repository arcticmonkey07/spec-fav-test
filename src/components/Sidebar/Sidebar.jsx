import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ toggleMenuHandler, isMenuVisible }) => {
  const isMenuVisibleClass = isMenuVisible ? styles.sidebar_active : "";

  const menuItems = ["Главная", "Клиенты", "Сотрудники", "Аналитика"];

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
      {menuItems.map((item) => {
        return (
          <div className={styles.sidebar_item} key={item}>
            <div className={styles.sidebar_avatar}></div>
            {isMenuVisible ? (
              <p
                className={`${styles.sidebar_name} ${styles.sidebar_name__active}`}
              >
                {item}
              </p>
            ) : (
              <p className={styles.sidebar_name}>{item}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
