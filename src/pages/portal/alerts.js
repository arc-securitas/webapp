import React from "react";
import PortalNav from "../../components/PortalNav.js";
import portalStyles from './portal.module.css';

const Alerts = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Alerts"/></div>
            <main className={portalStyles.main}>
                {/* Insert all main content here */}
                Alerts
            </main>
        </div>
    )
}

export default Alerts;