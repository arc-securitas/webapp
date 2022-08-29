import { Link } from "react-router-dom";
import styles from './Card.module.css';
import * as React from 'react';

export default function Card(props) {
  return (
      <div className={styles.card}>
        {props.children}
      </div>
  );
}