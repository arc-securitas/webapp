import React from "react";
import Card from '../components/Card.js';
import { ReactComponent as Calendar } from '../images/Calendar.svg';
import { ReactComponent as MapPin } from '../images/Map_Pin.svg';
import { ReactComponent as Clock } from '../images/Clock.svg';
import { agentsToString } from '../util.js';
import styles from './eventCard.module.css'

const EventCard = (props) => {
    let startTime = "";
    let endTime = "";

    let startDate = new Date(props.showing["startTime"]);
    startDate.setHours(0, 0, 0, 0);

    let endDate = new Date(props.showing["endTime"]);
    endDate.setHours(0, 0, 0, 0);

    
    if (startDate.getTime() < endDate.getTime()) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        startTime += startDate.toLocaleDateString(undefined, options) + " ";
        endTime += endDate.toLocaleDateString(undefined, options) + " ";
    }

    startTime += new Date(props.showing["startTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });
    endTime += new Date(props.showing["endTime"]).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true });


  return (
      <div className={`${styles.card} ${props.clickHandler === undefined ? "" : styles.clickable}`} onClick={props.clickHandler}>
          <Card>
              <div className={styles.miniRow}>
                  <div className={styles.bold}>{agentsToString(props.showing["agents"])}</div>
              </div>
              <div className={styles.miniRow}>
                  <MapPin className={styles.icon}/>
                  {props.showing["location"]}
              </div>
              <div className={styles.miniRow}>
                  <Clock className={styles.icon}/>
                  {startTime} - {endTime}
              </div>
              <div className={styles.miniRow}>
                  <Calendar className={styles.icon}/>
                  {props.showing["eventType"]}
              </div>
          </Card>
      </div>
  );
}

export default EventCard;