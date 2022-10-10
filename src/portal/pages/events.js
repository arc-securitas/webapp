import React, { useState, useEffect } from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';
import Card from '../components/Card.js';
import styles from './events.module.css'
import { ReactComponent as Calendar } from '../images/Calendar.svg';
import { ReactComponent as MapPin } from '../images/Map_Pin.svg';
import { ReactComponent as Clock } from '../images/Clock.svg';
import EventSolo from './eventSolo.js';
import { agentsToString } from '../util.js';

const Events = () => {
    const [records, setRecords] = useState([]);
    const [activeEvent, setActiveEvent] = useState("");

    // Gets records from |date| plus the upcoming 7 days (hardcoded atm).
    async function getRecords(d) {
        // |records| has one row per day. Each row is an array w/ the events of that day.
        let records = [];
        for (let i = 0; i < 7; i++) {
            let date = new Date(d);
            date.setDate(date.getDate() + i);
            // Fetches the events corresponding to a single day
            const response = await fetch(`/events/getByDate/${date.toISOString().split('T')[0]}`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            // Adds the events of the day to |records|
            records.push(await response.json());
        }

        let date = new Date(d);
        // Finally, maps the records to cards w/ the corresponding data in them.
        setRecords(records.map((day) => {
            let result = (
                <div>
                    <div className={styles.title}>{dayOfWeek(date.getDay())}, {date.toISOString().split("T")[0]}</div>
                    <div className={styles.row}>
                        {day.map((showing) => {
                                return (
                                    <div className={styles.card} onClick={() => setActiveEvent(showing["_id"])}>
                                        <Card>
                                            <div className={styles.miniRow}>
                                                <div className={styles.bold}>{agentsToString(showing["agents"])}</div>
                                            </div>
                                            <div className={styles.miniRow}>
                                                <MapPin className={styles.icon}/>
                                                {showing["location"]}
                                            </div>
                                            <div className={styles.miniRow}>
                                                <Clock className={styles.icon}/>
                                                {showing["startTime"]} - {showing["endTime"]}
                                            </div>
                                            <div className={styles.miniRow}>
                                                <Calendar className={styles.icon}/>
                                                {showing["eventType"]}
                                            </div>
                                        </Card>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            );
            date.setDate(date.getDate() + 1);
            return result;
        }
        ));
    }

    function dayOfWeek(d) {
        switch(d) {
            case 0:
                return "Sunday"
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            default:
                return "Error"
        }
    }

    function displayActive() {
        if (activeEvent === "") {
            return (
                <>
                    {records.length === 0 ? "loading..." : records}
                    <div className={styles.bottomSpacer}/>
                </>
            );
        } else {
            return (
                <>
                    <EventSolo activeEvent={activeEvent} callback={() => setActiveEvent("")}/>
                    <div className={styles.bottomSpacer}/>
                </>
            );
        }
    }

    useEffect(() => {
        getRecords(new Date());
    }, []);

    return (
        <div className={`${portalStyles.portal} ${styles.eventsPage}`}>
            <div className={portalStyles.nav}><PortalNav page="Events"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <CalendarSvg />
                    Events
                </PortalHeader>
                {/* Insert all main content below header here */}
                <div className={portalStyles.mainPad}>
                    {displayActive()}
                </div>
            </main>
        </div>
    );
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