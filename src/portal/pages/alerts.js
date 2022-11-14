import React, { useEffect, useState } from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './alerts.module.css';

import Card from '../components/Card.js';

const Alerts = () => {
    const [loading, setLoading] = useState(true);
    const [alerts, setAlerts] = useState([]);
    const [agentsMap, setAgentsMap] = useState(new Map());
    const [alertsUI, setAlertsUI] = useState([]);
    const [startDay, setStartDay] = useState(new Date());
    const { user } = useAuth0();

    useEffect(() => {
        async function getAlerts(day) {
            let records = [];
            for (let i=0; i<7; i++) {
                let startDate = new Date(day);
                let endDate = new Date(day);
                startDate.setDate(startDate.getDate()+i);
                endDate.setDate(endDate.getDate()+i+1);
                const response = await fetch(`/alerts/${user.email}/${startDate.toISOString().split('T')[0]}/${endDate.toISOString().split('T')[0]}`);

                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }

                records.push(await response.json());

            }
            setAlerts(records);
            let date = new Date(day);
            setAlertsUI(records.map((day) => {
                let result = (
                    <div>
                        <div className={styles.title}>{date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</div>
                        <div className={styles.row}>
                            {day.length !== 0 ? day.map((showing) => {
                                return (
                                    <Card>
                                        <div>
                                            Agent Name: {agentsMap.has(showing.agent) ? `${agentsMap.get(showing.agent).firstName} ${agentsMap.get(showing.agent).lastName}` : ""}
                                        </div>
                                        <div>
                                            Location: {showing["location"]}
                                        </div>
                                        <div>
                                            Date: {new Date(showing["dateTime"]).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                                        </div>
                                        <div>
                                            Time:{new Date(showing["dateTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })}
                                        </div>
                                        <div>
                                            Audio Transcription: {showing["audioTranscription"]}
                                        </div>
                                    </Card>
                                );
                            }) : "No alerts"}
                        </div>
                    </div>
                );
                date.setDate(date.getDate()+1);
                return result;
            }));
        }

        async function getAgents() {
            alerts.map(async (alert) => {
                for (let i=0; i<alert.length; i++) {
                    let agentID = alert[i].agent;
                    if (!agentsMap.has(agentID.toString())) {
                        let response = await fetch(`/agents/${user.email}/${agentID}`);
                        let agent = await response.json();
                        if (agent !== null) {
                            let temp = new Map(agentsMap);
                            temp.set(agentID.toString(), agent);
                            setAgentsMap(temp);
                        }
                    }
                }
            });
        }

        getAlerts(startDay);
        getAgents();
        setLoading(false);
    }, [alertsUI.length, agentsMap.size]);

    function display() {
        return (
            <div className={portalStyles.portal}>
                <div className={portalStyles.nav}><PortalNav page="Alerts"/></div>
                <main className={portalStyles.main}>
                    <PortalHeader>
                        <AlertSvg />
                        Safety Alerts
                    </PortalHeader>
                    {/* Insert all main content below header here */}
                    {alertsUI.length === 0 || loading ? "loading..." : alertsUI}
                    <div className={styles.bottomSpacer} />
                </main>
            </div>
        )
    }

    return (
        <>
            {display()}
        </>
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