import React from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import Card from '../components/Card.js';
import { ReactComponent as Check } from '../images/Check.svg';
import { ReactComponent as Cross } from '../images/Cross.svg';
import portalStyles from './portal.module.css';
import styles from './payment.module.css';

const Payment = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Payment"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <PaymentSvg />
                    Payment
                </PortalHeader>
                {/* Insert all main content below header here */}
                <div className={portalStyles.row}>
                    <div className={portalStyles.column}>
                        <h1 className={`${styles.leftPad} ${styles.h1}`}>Plan Details</h1>
                        <div className={`${styles.leftPad}`}>
                        <Card className={styles.leftPad}>
                            <div className={`${styles.planTitle} ${styles.big}`}>Basic</div>
                            <div className={`${styles.planDetails} ${styles.normal}`}>
                                <div className={styles.row}><Check className={styles.icon} />Safety timer for every agent</div>
                                <div className={styles.row}><Check className={styles.icon} />Calendar synchronization</div>
                                <div className={styles.row}><Check className={styles.icon} />Audio recording with alerts</div>
                            </div>
                            <div className={styles.calculation}>
                                <div className={styles.row}>
                                    <div className={`${styles.bold} ${styles.giant}`}>$10.99 </div><div className={`${styles.copy} ${styles.normal}`}>/ agent / month</div>
                                </div>
                                <div className={styles.row}>
                                    <Cross className={styles.icon} /><div className={`${styles.bold} ${styles.giant}`}>14 </div><div className={`${styles.copy} ${styles.normal}`}>agents</div><a className={`${styles.a} ${styles.small}`}>Manage agents</a>
                                </div>
                                <hr className={styles.horizontal} />
                                <div className={styles.row}>
                                    <div className={`${styles.bold} ${styles.giant}`}>$153.86 </div><div className={`${styles.copy} ${styles.normal}`}>/month</div>
                                </div>
                            </div>
                        </Card>
                        </div>
                    </div>
                    <div className={portalStyles.column}>
                        <h1 className={`${styles.h1}`}>Payment Info</h1>
                        <div>insert payment stuff here</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Payment;

class PaymentSvg extends React.Component {
    render() {
        return (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="black" />
            </svg>
        );
    }
}