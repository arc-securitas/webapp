import React from "react";
import PortalNav from "../../components/PortalNav.js";
import portalStyles from './portal.module.css';

const Dashboard = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Dashboard"/></div>
            <main className={portalStyles.main}>
                {/* Insert all main content here */}
                Dashboard
            </main>
        </div>
    )
}

export default Dashboard;