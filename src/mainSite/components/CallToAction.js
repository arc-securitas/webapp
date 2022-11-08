import React from "react";
import styles from "./CallToAction.module.css"
import JoinModal from './joinModal.js';

export default function CallToAction() {
  return (
    <div className={styles.callToAction}>
      <p className={styles.h3s}>Step into the future of real estate safety.</p>
      <JoinModal buttonStyling={{
        display: 'block',
        backgroundColor: "#fff",
        border: 'none',
        borderRadius: '4px',
        fontFamily: "Outfit",
        fontWeight: '700',
        textTransform: 'none',
        color: '#3684C9',
        padding: '12px 20px',
        textAlign: 'center',
        gap: '4px',
        justifyContent: 'center',
        fontWeight: 700,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '4rem',

        '@media screen and (min-width: 769px)': {
          marginTop: '1rem',
        },

        '&:hover': {
          backgroundColor: '#fff'
        }
      }} />
    </div>
  );
}
