import React, { useState, useEffect } from "react";
import MapWrapper from "../components/MapWrapper.js";
import { ReactComponent as BackArrow } from '../images/BackArrow.svg';
import styles from './eventSolo.module.css';
import { agentsToString } from '../util.js';
import Card from '../components/Card.js';
import { ReactComponent as Black_Clock } from '../images/Black_Clock.svg';
import { ReactComponent as Black_Map_Pin } from '../images/Black_Map_Pin.svg';
import { ReactComponent as Black_Calendar } from '../images/Black_Calendar.svg';

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
            <AlertCard alert={alert[0]}/>
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
            <br/>
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