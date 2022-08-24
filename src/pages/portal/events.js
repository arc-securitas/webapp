import React from "react";
import PortalNav from "../../components/PortalNav.js";
import portalStyles from './portal.module.css';

const Events = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Events"/></div>
            <main className={portalStyles.main}>
                {/* Insert all main content here */}
                Events
            </main>
        </div>
    )
}

export default Events;