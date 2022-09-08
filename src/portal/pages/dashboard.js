import React, { useEffect, useState } from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';
import Card from '../components/Card.js';
import { ReactComponent as Map_Pin } from '../images/Map_Pin.svg';
import { ReactComponent as Calendar } from '../images/Calendar.svg';
import { ReactComponent as RedDot } from '../images/RedDot.svg';
import { ReactComponent as GrayDot } from '../images/GrayDot.svg';
import { ReactComponent as Clock } from '../images/Clock.svg';
import styles from './dashboard.module.css';

const Dashboard = () => {
    const [loading, SetLoading] = useState(true);

    const [newAlerts, setNewAlerts] = useState([]);

    const [olderAlerts, setOlderAlerts] = useState([]);

    const [agentsMap, setAgentsMap] = useState(new Map());

    useEffect(() => {
        fetchNewAlerts();
        getAgents(newAlerts);
        fetchOlderAlerts();
        getAgents(olderAlerts);

        SetLoading(false);
        return;


    }, [newAlerts.length, olderAlerts.length, agentsMap.size]);

    async function fetchNewAlerts() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tmrw = new Date();
        tmrw.setDate(today.getDate() + 1);
        tmrw.setHours(0, 0, 0, 0);

        const response = await fetch(`/alerts/${today}/${tmrw}`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const newAlerts = await response.json();
        setNewAlerts(newAlerts);
    }

    async function fetchOlderAlerts() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const startOfWeek = new Date();
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        const response = await fetch(`/alerts/${startOfWeek}/${today}`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const olderAlerts = await response.json();
        setOlderAlerts(olderAlerts);
    }

    async function getAgents(alertsArray) {
        alertsArray.map(async (safetyAlert) => {
            let agentID = safetyAlert.agent;
            if (!agentsMap.has(agentID.toString())) {
                let agent = await fetchAgent(agentID);
                if (agent != null) {
                    let temp = new Map(agentsMap);
                    temp.set(agentID.toString(), agent);
                    setAgentsMap(temp);
                    console.log("Inserting in map" + agentID);
                }
                console.log("Size:" + agentsMap.size);
                console.log(agentsMap);
            }
        });

    }

    async function fetchAgent(agentID) {
        const response = await fetch(`/agents/${agentID}`);

        if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return null;
        }

        const agent = await response.json();
        if (!agent) {
            window.alert(`Record with id ${agentID} not found`);
            return null;
        }

        return agent;
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    function alertsList(alerts, dotType) {
        console.log(agentsMap);
        return alerts.map((safetyAlert) => {
            let agent = agentsMap.get(safetyAlert.agent.toString());
            let date = new Date(safetyAlert.dateTime).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
            let time = new Date(safetyAlert.dateTime).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })

            if (agent != null) {
                console.log("here too");
                let agentName = agent.firstName + " " + agent.lastName;
                console.log(agentName);
                return (
                    <Card>
                        <div >
                            <span className={`${styles.agentName} ${styles.big} ${styles.tabRight}`}>
                                {displayDot(dotType)}
                                {" " + agentName}
                            </span>
                            <span className={`${styles.planDetails} ${styles.small} ${styles.rightPad}`}>
                                <Map_Pin className={styles.icon} />{safetyAlert.location}
                            </span>

                            <span className={`${styles.planDetails} ${styles.small} ${styles.rightPad}`}>
                                <Calendar className={styles.icon} /> {date}
                            </span>

                            <span className={`${styles.planDetails} ${styles.small} ${styles.rightPad}`}>
                                <Clock className={styles.icon} /> {time}
                            </span>
                        </div>
                    </Card>
                );
            }
        });
    }

    function displayDot(dotType) {
        if (dotType.localeCompare("GrayDot") === 0) {
            return (<GrayDot className={styles.icon} />)
        }
        else {
            return (<RedDot className={styles.icon} />)
        }
    }

    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Dashboard" /></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <PieChartSvg />
                    Dashboard
                </PortalHeader>
                {/* Insert all main content below header here */}
                <div className={portalStyles.row}>
                    <div className={portalStyles.column}>
                        <h1 className={`${styles.leftPad} ${styles.h1}`}>Today's Events</h1>
                        <Card>
                            Agents' Events
                        </Card>
                    </div>
                    <div className={portalStyles.column}>
                        <h1 className={`${styles.leftPad} ${styles.h1}`}>New Alerts</h1>
                        <div>{alertsList(newAlerts, "RedDot")}</div>
                        <h1 className={`${styles.leftPad} ${styles.h1}`}>Alerts from the Week</h1>
                        <div>{alertsList(olderAlerts, "GrayDot")}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;

class PieChartSvg extends React.Component {
    render() {
        return (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 18.5L12 12V3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        );
    }
}