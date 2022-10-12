import React, { useState, useEffect } from "react";
import MapWrapper from "../components/MapWrapper.js";
import { ReactComponent as BackArrow } from '../images/BackArrow.svg';
import styles from './eventSolo.module.css';
import { agentsToString } from '../util.js';

const EventSolo = (props) => {
  const [eventData, setEventData] = useState([]);
  const [alertData, setAlertData] = useState([]);

  useEffect(() => {
      getEventData(props.activeEvent);
  }, [props.activeEvent]);

  if (eventData.length === 0) return (<div>Loading...</div>);

  return (
    <div className={styles.row}>
      <div>
        <BackArrow className={styles.backArrow} onClick={props.callback}/>
      </div>
      <div>
        <h1 className={styles.sectionTitle}>Location</h1>
        <MapWrapper features={[]} address={eventData[0]["location"]}/>
        {eventData[0]["location"]}
      </div>
      <div>
        <div className={styles.column}>
          <div>
            <h1 className={styles.sectionTitle}>Time</h1>
            {eventData[0]["startTime"]} - {eventData[0]["endTime"]}
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
  );

  async function getEventData(id) {
    const response = await fetch(`/events/getById/${id}`);

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
    const response = await fetch(`/alerts/getById/${id}`);

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
        return(
          <div>
            {alert[0]["_id"]}
          </div>
        );
      })
    }
  }
}

export default EventSolo;