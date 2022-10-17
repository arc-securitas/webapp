import React from "react";
import Card from '../components/Card.js';
import { ReactComponent as Calendar } from '../images/Calendar.svg';
import { ReactComponent as MapPin } from '../images/Map_Pin.svg';
import { ReactComponent as Clock } from '../images/Clock.svg';
import { agentsToString } from '../util.js';
import styles from './eventCard.module.css'

const EventCard = (props) => {
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
                  {props.showing["startTime"]} - {props.showing["endTime"]}
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