import React from "react";
import PortalNav from "../../components/PortalNav.js";
import portalStyles from './portal.module.css';

const Agents = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Agents"/></div>
            <main className={portalStyles.main}>
                {/* Insert all main content here */}
                Agents
            </main>
        </div>
    )
}

export default Agents;