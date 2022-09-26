import React, { useState, useEffect } from "react";
import Map from "../components/Map.js";
import { ReactComponent as BackArrow } from '../images/BackArrow.svg';
import styles from './eventSolo.module.css';
import { agentsToString } from '../util.js';

const EventSolo = (props) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
      getRecords(props.activeEvent);
  }, [props.activeEvent]);

  if (records.length === 0) return (<div>Loading...</div>);

  return (
    <div className={styles.row}>
      <div>
        <BackArrow className={styles.backArrow} onClick={props.callback}/>
      </div>
      <div>
        <h1 className={styles.sectionTitle}>Location</h1>
        {/* <Map /> */}
        {records[0]["location"]}
      </div>
      <div>
        <div className={styles.column}>
          <div>
            <h1 className={styles.sectionTitle}>Time</h1>
            {records[0]["startTime"]} - {records[0]["endTime"]}
          </div>
          <div>
            <h1 className={styles.sectionTitle}>Agents</h1>
            {agentsToString(records[0]["agents"])}
          </div>
          <div>
            <h1 className={styles.sectionTitle}>Event Type</h1>
            {records[0]["eventType"]}
          </div>
          <div>
            <h1 className={styles.sectionTitle}>Alerts</h1>
            [Insert alerts here]
          </div>
        </div>
      </div>
    </div>
  );

  async function getRecords(id) {
    const response = await fetch(`/events/getById/${id}`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    let result = await response.json();
    setRecords(result);
  }
}

export default EventSolo;