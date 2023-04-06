import React, { useState, useEffect } from "react";
import MapWrapper from "../components/MapWrapper.js";
import styles from './solo.module.css';
import { agentsToString } from '../util.js';
import Card from '../components/Card.js';
import { ReactComponent as Black_Clock } from '../images/Black_Clock.svg';
import { ReactComponent as Black_Map_Pin } from '../images/Black_Map_Pin.svg';
import { ReactComponent as Black_Calendar } from '../images/Black_Calendar.svg';
import portalStyles from './portal.module.css';
import PortalHeader from '../components/PortalHeader.js';
import PortalNav from '../components/PortalNav.js';
import { useParams } from 'react-router-dom';

/*
  The detailed view of a particular event.
  ------------------------------------------------------------------------------
  Accessed through the path "/portal/events/:id", where |id| is the MongoDB _id
  associated with the event to view. See App.js for Route definitions.
*/

const EventSolo = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState([]);
  const [alertData, setAlertData] = useState([]);

  useEffect(() => {
    getEventData(id);
  }, [id]);

  if (eventData.length === 0) return (<div>Loading...</div>);

  let startTime = new Date(eventData[0]["startTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });
  let endTime = new Date(eventData[0]["endTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className={portalStyles.portal}>
      <div className={portalStyles.nav}><PortalNav page="Events" /></div>
      <main className={portalStyles.main}>
        <PortalHeader>
          <CalendarSvg />
          Events
          <div className={styles.flexGrow} />
        </PortalHeader>
        {/* Insert all main content below header here */}
        <div className={portalStyles.mainPad}>
          <div className={styles.row}>
            <div>
              <h1 className={styles.sectionTitle}>Location</h1>
              {/* <MapWrapper features={[]} address={eventData[0]["location"]} /> */}
              {eventData[0]["location"]}
            </div>
            <div>
              <div className={styles.column}>
                <div>
                  <h1 className={styles.sectionTitle}>Time</h1>
                  {startTime} - {endTime}
                </div>
                <div>
                  <h1 className={styles.sectionTitle}>Agents</h1>
                  {agentsToString(eventData[0]["agents"])}
                </div>
                <div>
                  <h1 className={styles.sectionTitle}>Event Type</h1>
                  {eventData[0]["eventType"]}
                </div>
                <div>
                  <h1 className={styles.sectionTitle}>Alerts</h1>
                  {displayAlerts()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  async function getEventData(id) {
    const response = await fetch(`/api/events/getById/${id}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let result = await response.json();
    setEventData(result);

    let alerts = [];
    const populateAlerts = async () => {
      if (result[0]["alerts"] !== undefined) {
        for (const alertId of result[0]["alerts"]) {
          const alertResponse = await getAlertData(alertId);
          alerts.push(alertResponse);
        }
      }
    }

    await populateAlerts();
    setAlertData(alerts);
  }

  async function getAlertData(id) {
    const response = await fetch(`/api/alerts/getById/${id}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let result = await response.json();
    return result;
  }

  function displayAlerts() {
    if (alertData.length === 0) {
      return (
        <div>
          No alerts for this event.
        </div>
      )
    } else {
      return alertData.map((alert) => {
        return (
          <div>
            <AlertCard alert={alert[0]} />
          </div>
        );
      })
    }
  }
}

class AlertCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date = new Date(this.props.alert.dateTime).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    let time = new Date(this.props.alert.dateTime).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })

    return (
      <div>
        <Card>
          <span className={` ${styles.leftPad}`}>
            <Black_Map_Pin className={styles.icon} />
            {this.props.alert.location}
            <br />
          </span>

          <span className={` `}>
            <Black_Calendar className={styles.icon} /> {date}
          </span>

          <span className={`  ${styles.leftPad}`}>
            <Black_Clock className={styles.icon} /> {time}
          </span>

          <br />

          <span>
            Transcription:
            <br />
            {this.props.alert.audioTranscription}
          </span>
        </Card>
      </div>
    );
  }
}

export default EventSolo;

class CalendarSvg extends React.Component {
  render() {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2V4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2V4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
}