import React from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import Card from '../components/Card.js';
import { ReactComponent as Check } from '../images/Check.svg';
import { ReactComponent as Cross } from '../images/Cross.svg';
import portalStyles from './portal.module.css';
import styles from './payment.module.css';

const Account = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Agents"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    Manage Your Account
                </PortalHeader>
                {/* Insert all main content below header here */}
                
            </main>
        </div>
    )
}

export default Account;
