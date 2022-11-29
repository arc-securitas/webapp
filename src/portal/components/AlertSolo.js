import React, { useState, useEffect } from "react";
import MapWrapper from "../components/MapWrapper.js";
import { ReactComponent as BackArrow } from '../images/BackArrow.svg';
import styles from './AlertSolo.module.css';
import Card from '../components/Card.js';
import { ReactComponent as Black_Clock } from '../images/Black_Clock.svg';
import { ReactComponent as Black_Map_Pin } from '../images/Black_Map_Pin.svg';
import { ReactComponent as Black_Calendar } from '../images/Black_Calendar.svg';

const EventSolo = (props) => {
  const [alertData, setAlertData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
      getAlertData(props.activeAlert);
  }, [props.activeAlert]);

  if (alertData.length === 0) return (<div>Loading...</div>);

  return (
    <div className={styles.row}>
      <div>
        <BackArrow className={styles.backArrow} onClick={props.callback}/>
      </div>
      <div>
        <h1 className={styles.sectionTitle}>Location</h1>
        <MapWrapper features={[]} address={alertData["location"]}/>
        {alertData["location"]}
      </div>
      <div>
        <div>
          <h1 className={styles.sectionTitle}>Event</h1>
          <div>
            {eventData["eventType"]}
          </div>
          <div>
            {eventData["location"]}
          </div>
          <div>
            {eventData["startTime"]} - {eventData["endTime"]}
          </div>
        </div>
        <div>
          <h1 className={styles.sectionTitle}>Contact Information</h1>
          <div>
            {agentData["phoneNumber"]}
          </div>
          <div>
            {agentData["email"]}
          </div>
        </div>
        <div>
          <h1 className={styles.sectionTitle}>Time</h1>
          {new Date(alertData["dateTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>
        <div>
          <h1 className={styles.sectionTitle}>Audio Recording</h1>
          [insert ui element here]
        </div>
        <div>
          <h1 className={styles.sectionTitle}>Audio Transcription</h1>
          {alertData["audioTranscription"]}
        </div>
      </div>
    </div>
  );

  async function getAlertData(id) {
    const response = await fetch(`/alerts/getById/${id}`);

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
    const response = await fetch(`/events/getById/${id}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let result = await response.json();
    console.log("event");
    console.log(result[0]);
    return result[0];
  }

  async function getAgentData(id) {
    const response = await fetch(`/agents/${id}`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let result = await response.json();
    console.log("agent");
    console.log(result);
    return result;
  }
}

export default EventSolo;