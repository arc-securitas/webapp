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
import { ReactComponent as Black_Clock } from '../images/Black_Clock.svg';
import { ReactComponent as Black_Map_Pin } from '../images/Black_Map_Pin.svg';
import { ReactComponent as Black_Calendar } from '../images/Black_Calendar.svg';
import styles from './dashboard.module.css';
import { Link } from 'react-router-dom';

/*
  The dashboard!
  ------------------------------------------------------------------------------
  Accessed through the path "/portal/dashboard". See App.js for Route definitions.
*/

import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    const [loading, SetLoading] = useState(true);

    // safety alerts from the week
    const [safetyAlerts, setSafetyAlerts] = useState([]);

    // today's events
    const [events, setEvents] = useState([]);

    // map of agent objects
    const [agentsMap, setAgentsMap] = useState(new Map());

    // Auth0 info
    const { user, isAuthenticated, isLoading} = useAuth0();

    // Use Effect called on refresh and changes to the following:
    //      safetyAlerts array length, agentsMap map size, and
    //      Auth0's isLoading & isAuthenticated boolean values
    useEffect(() => {
        // fetches all the safety alerts from this week
        async function fetchSafetyAlerts() {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const tmrw = new Date();
            tmrw.setDate(today.getDate() + 1);
            tmrw.setHours(0, 0, 0, 0);

            const startOfWeek = new Date();
            startOfWeek.setDate(today.getDate() - today.getDay());
            startOfWeek.setHours(0, 0, 0, 0);

            const response = await fetch(`/api/alerts/${user.email}/${startOfWeek}/${tmrw}`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const safetyAlerts = await response.json();
            setSafetyAlerts(safetyAlerts);
        }

        // fetches all events sechedule today
        async function fetchEvents() {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const tmrw = new Date();
            tmrw.setDate(today.getDate() + 1);
            tmrw.setHours(0, 0, 0, 0);

            const response = await fetch(`/api/events/${user.email}/${today}/${tmrw}`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const events = await response.json();
            setEvents(events);
        }

        // Gets agents associated with the safety alerts
        async function getAgents() {
            safetyAlerts.map(async (safetyAlert) => {
                let agentID = safetyAlert.agent;
                if (!agentsMap.has(agentID.toString())) {
                    let agent = await fetchAgent(agentID);
                    if (agent != null) {
                        let temp = new Map(agentsMap);
                        temp.set(agentID.toString(), agent);
                        setAgentsMap(temp);
                    }
                }
            });
        }

        // Fetches an agent based on their unique ID
        async function fetchAgent(agentID) {
            const response = await fetch(`/api/agents/${user.email}/${agentID}`);

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

        // Check if Auth0 is loading or authenticated
        // Then, run queries
        if (!isLoading && isAuthenticated) {
            fetchSafetyAlerts();
            fetchEvents();
            getAgents();
            SetLoading(false);
        }

        return;

    }, [safetyAlerts.length, agentsMap.size, isLoading, isAuthenticated]);

    // Displays a the list of alerts
    function alertsList() {
        if (safetyAlerts.length === 0) {
            return (<p className={`${styles.normal}`}>No alerts to display</p>);
        }
        return safetyAlerts.map((safetyAlert) => {
            let agent = agentsMap.get(safetyAlert.agent.toString());
            let date = new Date(safetyAlert.dateTime).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
            let time = new Date(safetyAlert.dateTime).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })

            if (agent != null) {
                let agentName = agent.firstName + " " + agent.lastName;
                return (
                    <div className={styles.alertCard}>
                        <Link to={`/portal/alerts/${safetyAlert["_id"]}`}>
                            <Card>
                                <span className={styles.miniRow}>
                                    {displayDot(safetyAlert.viewed ? "GrayDot" : "RedDot")}
                                </span>
                                <span className={`${styles.agentName} ${styles.normal} `}>
                                    {" " + agentName}
                                </span>
                                <span className={` ${styles.leftPad}`}>
                                    <Black_Map_Pin className={styles.icon} />{safetyAlert.location} <br />
                                </span>

                                <span className={` `}>
                                    <Black_Calendar className={styles.icon} /> {date}
                                </span>

                                <span className={`  ${styles.leftPad}`}>
                                    <Black_Clock className={styles.icon} /> {time}
                                </span>
                            </Card>
                        </Link>
                    </div>
                );
            }
        });
    }

    // Renders the list of events occuring today
    function eventsList() {
        if (events.length === 0) { // if no events scheduled for today
            return (
                <div>
                    <p className={`${styles.normal}`}>You have no events today.</p>
                    <a>See all events</a>
                </div>
            );
        }

        // Render all of today's events and their details
        return events.map((showing) => {
            return (
                <div className={styles.eventCard}>
                    <Link to={`/portal/events/${showing["_id"]}`}>
                        <Card>
                            <div className={styles.miniRow}>
                                <div className={`${styles.agentName} ${styles.normal}`}>{agentsString(showing.agents)}</div>
                            </div>
                            <div className={styles.miniRow}>
                                <Map_Pin className={styles.icon} />
                                {" " + showing.location}
                            </div>
                            <div className={styles.miniRow}>
                                <Clock className={styles.icon} />
                                {" " + showing.startTime} - {showing.endTime}
                            </div>
                            <div className={styles.miniRow}>
                                <Calendar className={styles.icon} />
                                {" " + showing.eventType}
                            </div>
                        </Card>
                    </Link>
                </div>
            )
        });
    }

    // Agents name formatting for render
    function agentsString(agents) {
        if (agents.length === 0) {
            return "no agent"
        }
        if (agents.length === 1) {
            let agent = agents[0];
            return `${agent.firstName} ${agent.lastName}`;
        } else if (agents.length === 2) {
            return `${agents[0].firstName} ${agents[0].lastName} and ${agents[1].firstName} ${agents[1].lastName}`;
        } else if (agents.length === 3) {
            return `${agents[0].firstName} ${agents[0].lastName}, ${agents[1].firstName} ${agents[1].lastName}, and 1 other`;
        } else {
            let remaining = agents.length - 2;
            return `${agents[0].firstName} ${agents[0].lastName}, ${agents[1].firstName} ${agents[1].lastName}, and ${remaining} others`;
        }
    }


    // Renders the alert's dot
    function displayDot(dotType) {
        if (dotType.localeCompare("GrayDot") === 0) {
            return (<GrayDot className={styles.alertIcon} />)
        }
        else {
            return (<RedDot className={styles.alertIcon} />)
        }
    }

    // Overall rendering function for entire page
    function displayPage() {
        if (!isAuthenticated && !isLoading) { // if user not logged in, display error msg
            return <div className={`${portalStyles.mainPad}, ${portalStyles.portal}`}><h1>Error: Unauthorized Acess - Please log in</h1></div>;
        }

        if (loading || isLoading) {  // Loading message
            return (
                <div className={`${portalStyles.portal} ${styles.dashboardPage} `}>
                    <div className={portalStyles.nav}><PortalNav page="Dashboard" /></div>
                    <main className={portalStyles.main}>
                        <PortalHeader>
                            <PieChartSvg />
                            Dashboard
                        </PortalHeader>
                        <div className={portalStyles.mainPad}>loading...</div>
                    </main>
                </div>
            );
        }

        if (isAuthenticated) { // if user is authenticated correctly, display page
            return (
                <div className={`${portalStyles.portal} ${styles.dashboardPage} `}>
                    <div className={portalStyles.nav}><PortalNav page="Dashboard" /></div>
                    <main className={portalStyles.main}>
                        <PortalHeader>
                            <PieChartSvg />
                            Dashboard
                        </PortalHeader>
                        {/* Insert all main content below header here */}
                        <div className={`${portalStyles.row} ${portalStyles.mainPad}`} >
                            <div className={` ${portalStyles.column} `}>
                                <h1 className={` ${styles.title} ${styles.leftPad} `}>Today's Events</h1>
                                <div className={`${styles.sectionScroll} `}>{eventsList()}</div>
                            </div>

                            <div className={` ${portalStyles.column} `}>
                                <h1 className={`${styles.title} ${styles.leftPad}`}>Alerts from the Week</h1>
                                <div className={`${styles.sectionScroll}`}>{alertsList()}</div>
                            </div>
                        </div>
                    </main>
                </div>
            )
        }
    }

    return (
        <div >
            {displayPage()}
        </div>
    )
}

export default Dashboard;

class PieChartSvg extends React.Component {
    render() {
        return (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 18.5L12 12V3" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
}