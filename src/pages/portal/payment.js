import React from "react";
import PortalNav from "../../components/PortalNav.js";
import portalStyles from './portal.module.css';

const Payment = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Payment"/></div>
            <main className={portalStyles.main}>
                {/* Insert all main content here */}
                Payment
            </main>
        </div>
    )
}

export default Payment;