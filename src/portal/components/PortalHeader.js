import { Link } from "react-router-dom";
import styles from './PortalHeader.module.css';
import * as React from 'react';

export default function PortalHeader(props) {
  return (
      <div className={styles.portalHeader}>
        {props.children}
      </div>
  );
}