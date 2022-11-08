import React, { useEffect, useState } from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';

import { useAuth0 } from "@auth0/auth0-react";

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [startDay, setStartDay] = useState(new Date());
    const { user } = useAuth0();

    async function getAlerts(day) {
        let records = [];
        console.log(user.email);
        for (let i=0; i<7; i++) {
            let startDate = new Date(day);
            let endDate = new Date(day);
            startDate.setDate(startDate.getDate()+i);
            endDate.setDate(endDate.getDate()+i+1);
            console.log(startDate.toISOString().split('T')[0]);
            console.log(endDate.toISOString().split('T')[0]);
            const response = await fetch(`/alerts/${user.email}/${startDate.toISOString().split('T')[0]}/${endDate.toISOString().split('T')[0]}`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            records.push(await response.json());
        }

        console.log(records);
    }

    useEffect(() => {
        getAlerts(startDay);
    }, []);

    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Alerts"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <AlertSvg />
                    Safety Alerts
                </PortalHeader>
                {/* Insert all main content below header here */}
            </main>
        </div>
    )
}

export default Alerts;

class AlertSvg extends React.Component {
    render() {
        return (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5264 18.5L12.8661 3.5C12.4812 2.83333 11.519 2.83333 11.1341 3.5L2.47385 18.5C2.08895 19.1667 2.57007 20 3.33987 20H20.6604C21.4302 20 21.9113 19.1667 21.5264 18.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9502 16H12.0502V16.1H11.9502V16Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    }
}