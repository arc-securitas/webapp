import React from "react";
import PortalNav from "../../components/PortalNav.js";
import PortalHeader from '../../components/PortalHeader.js';
import portalStyles from './portal.module.css';

const Events = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Events"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <CalendarSvg />
                    Events
                </PortalHeader>
                {/* Insert all main content below header here */}
            </main>
        </div>
    )
}

export default Events;

class CalendarSvg extends React.Component {
    render() {
        return (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 2V4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 2V4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        );
    }
}