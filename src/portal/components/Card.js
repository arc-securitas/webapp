import { Link } from "react-router-dom";
import styles from './Card.module.css';
import * as React from 'react';

/*
  Just a stylistic wrapper around some content. Check out Card.module.css if you
  want to make any edits.
  --------------------------------------------
  EXAMPLE:
  <Card>
    <div>Hi Mom</div>
  </Card>
  --------------------------------------------
*/

export default function Card(props) {
  return (
      <div className={styles.card}>
        {props.children}
      </div>
  );
}