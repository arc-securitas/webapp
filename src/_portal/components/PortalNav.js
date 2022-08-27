import { Link } from "react-router-dom";
import styles from './PortalNav.module.css';
import logoPic from "../../_mainSite/images/LogoBlueActual.svg";
import * as React from 'react';

export default function PortalNav(props) {
  return (
      <div className={styles.portalNav}>
        <img id="headerLogo" src={logoPic} alt="Arc Security Logo" className={styles.logo}/>
        <NavLabel link='Dashboard' isActive={props.page === 'Dashboard'}>
          <PieChartSvg color={props.page === 'Dashboard' ? 'white' : 'black'}/>
          <div className={styles.labelText}>Dashboard</div>
        </NavLabel>
        <NavLabel link='Alerts' isActive={props.page === 'Alerts'}>
          <AlertSvg color={props.page === 'Alerts' ? 'white' : 'black'}/>
          <div className={styles.labelText}>Safety Alerts</div>
        </NavLabel>
        <NavLabel link='Events' isActive={props.page === 'Events'}>
          <CalendarSvg color={props.page === 'Events' ? 'white' : 'black'}/>
          <div className={styles.labelText}>Events</div>
        </NavLabel>
        <NavLabel link='Agents' isActive={props.page === 'Agents'}>
          <PeopleSvg color={props.page === 'Agents' ? 'white' : 'black'}/>
          <div className={styles.labelText}>Manage Agents</div>
        </NavLabel>
        <NavLabel link='Payment' isActive={props.page === 'Payment'}>
          <PaymentSvg color={props.page === 'Payment' ? 'white' : 'black'}/>
          <div className={styles.labelText}>Payment</div>
        </NavLabel>
      </div>
  );
}

class NavLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Link to={"/portal/" + this.props.link} className={styles.link}>
        <div className={`${this.props.isActive ? styles.active : styles.inactive} ${styles.label}`}>
          {this.props.children}
        </div>
      </Link>
    );
  }
}

class PieChartSvg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18 18.5L12 12V3" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 12H21" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
}
class AlertSvg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5264 18.5L12.8661 3.5C12.4812 2.83333 11.519 2.83333 11.1341 3.5L2.47385 18.5C2.08895 19.1667 2.57007 20 3.33987 20H20.6604C21.4302 20 21.9113 19.1667 21.5264 18.5Z" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9502 16H12.0502V16.1H11.9502V16Z" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 9V13" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
}
class CalendarSvg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H20" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 2V4" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 2V4" stroke={this.props.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    );
  }
}
class PeopleSvg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z" fill={this.props.color}/>
      </svg>
    );
  }
}
class PaymentSvg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill={this.props.color}/>
      </svg>
    );
  }
}