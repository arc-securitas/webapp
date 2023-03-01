import React, { useState, useEffect } from "react";
import MapWrapper from "../components/MapWrapper.js";
import styles from './solo.module.css';
import { ReactComponent as Black_Clock } from '../images/Black_Clock.svg';
import { ReactComponent as Black_Map_Pin } from '../images/Black_Map_Pin.svg';
import { ReactComponent as Black_Calendar } from '../images/Black_Calendar.svg';
import { ReactComponent as Phone } from '../images/Phone.svg';
import { ReactComponent as Mail } from '../images/Mail.svg';
import portalStyles from './portal.module.css';
import PortalHeader from '../components/PortalHeader.js';
import PortalNav from '../components/PortalNav.js';

import { useParams } from 'react-router-dom';

/*
  The detailed view of a particular alert.
  ------------------------------------------------------------------------------
  Accessed through the path "/portal/alerts/:id", where |id| is the MongoDB _id
  associated with the alert to view. See App.js for Route definitions.
*/

const AlertSolo = () => {
  const { id } = useParams();
  const [alertData, setAlertData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
      getAlertData(id);
  }, [id]);

  if (alertData.length === 0) return (<div>Loading...</div>);

  return (
    <div className={portalStyles.portal}>
      <div className={portalStyles.nav}><PortalNav page="Alerts"/></div>
      <main className={portalStyles.main}>
        <PortalHeader>
            <AlertSvg />
            Safety Alerts
            <div className={styles.flexGrow}/>
        </PortalHeader>
        {/* Insert all main content below header here */}
          <div className={portalStyles.mainPad}>
            <div className={styles.row}>
              <div className={styles.column}>
                <h1 className={styles.title}>{agentData["firstName"]} {agentData["lastName"]}: {new Date(alertData["dateTime"]).toLocaleString(undefined, { weekday: "long", year: "numeric", month: "numeric", day: "numeric"})} {new Date(alertData["dateTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })}</h1>
                <div className={styles.row}>
                  <div>
                  <h1 className={styles.sectionTitle}>Location</h1>
                  <MapWrapper features={[]} address={alertData["location"]}/>
                  {alertData["location"]}
                </div>
                <div>
                  <div className={styles.section}>
                    <h1 className={styles.sectionTitle}>Alert Details</h1>
                    <div className={styles.sectionSub}>Audio Recording</div>
                    [insert ui element here]
                    <div className={styles.sectionSub}>Audio Transcription</div>
                    {alertData["audioTranscription"]}
                  </div>
                  <div className={styles.section}>
                    <h1 className={styles.sectionTitle}>Event</h1>
                    <div className={styles.iconLine}>
                      <Black_Calendar className={styles.icon}/>
                      {eventData["eventType"]}
                    </div>
                    <div className={styles.iconLine}>
                      <Black_Map_Pin  className={styles.icon}/>
                      {eventData["location"]}
                    </div>
                    <div className={styles.iconLine}>
                      <Black_Clock  className={styles.icon}/>
                      {eventData["startTime"]} - {eventData["endTime"]}
                    </div>
                  </div>
                  <div className={styles.section}>
                    <h1 className={styles.sectionTitle}>Agent Contact</h1>
                    <div className={styles.iconLine}>
                      <Phone  className={styles.icon}/>
                      {agentData["phoneNumber"]}
                    </div>
                    <div className={styles.iconLine}>
                      <Mail  className={styles.icon}/>
                      {agentData["email"]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomSpacer} />
        </div>
      </main>
    </div>
  );

  async function getAlertData(id) {
    const response = await fetch(`/api/alerts/getById/${id}`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    let result = await response.json();
    setAlertData(result[0]);
    const populateEvent = async () => {
      if (result[0]["event"] !== undefined) {
        return await getEventData(result[0]["event"])
      }
    }

    const populateAgent = async () => {
      if (result[0]["agent"] !== undefined) {
        return await getAgentData(result[0]["agent"]);
      }
    }

    setEventData(await populateEvent());
    setAgentData(await populateAgent());
  }

  async function getEventData(id) {
    const response = await fetch(`/api/events/getById/${id}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let result = await response.json();
    return result[0];
  }

  async function getAgentData(id) {
    const response = await fetch(`/api/agents/${id}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let result = await response.json();
    return result;
  }
}

export default AlertSolo;

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