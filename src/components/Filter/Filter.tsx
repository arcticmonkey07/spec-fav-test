import * as React from 'react'
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSortUsers } from "../../redux/actions/users";
import { RootState } from '../../redux';
import { useTypedSelector } from './../../hooks/useTypedSelector';

const Filter = ({ isFilterOpen, openFilterHandler }) => {
  const dispatch = useDispatch();

  const users = useTypedSelector(state => state.users.users);

  const isFilterOpenClass = isFilterOpen ? styles.filter_inputs_open : "";
  const isFilterOpenInputsClass = isFilterOpen ? styles.input_active : "";

  const onChangeSelectHandler = (e) => {
    let select = e.target.value;
    if (select === "az") {
      const newUsers = users.slice().sort();
      dispatch(setSortUsers(newUsers));
    }
    if (select === "za") {
      const newUsers = users.slice().sort().reverse();
      dispatch(setSortUsers(newUsers));
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter_header_block}>
        <h1 className={styles.filter_header}>Filter Block</h1>
        <button
          className={styles.filter_button}
          onClick={openFilterHandler}
        ></button>
      </div>
      <div className={`${styles.filter_inputs_wrapper} ${isFilterOpenClass}`}>
        <div>
          <div className={styles.select_block}>
            <select
              className={`${styles.select} ${
                isFilterOpen ? styles.select_active : ""
              }`}
              onChange={onChangeSelectHandler}
            >
              <option value="sort">Sort</option>
              <option value="az">A - a</option>
              <option value="za">Z - a</option>
            </select>
          </div>
          <div className={styles.inputs_block}>
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Дата от"
            />
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Дата до"
            />
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Дата от"
            />
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Дата до"
            />
          </div>
          <div className={styles.inputs_block}>
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Имя клиента"
            />
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Телефон"
            />
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Имя клиента"
            />
            <input
              className={`${styles.input} ${isFilterOpenInputsClass}`}
              type="text"
              placeholder="Телефон"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
