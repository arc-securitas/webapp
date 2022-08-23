import { Link } from "react-router-dom";
import styles from './PortalNav.module.css';
import logoPic from "../images/LogoBlueActual.svg";
import * as React from 'react';

// Page Names
const navItems = ['Dashboard', 'Alerts', 'Events', 'Agents', 'Payment'];

export default function PortalNav(props) {
  // Opening and closing drawer menu
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };

  return (
      <div className={styles.portalNav}>
        <img id="headerLogo" src={logoPic} alt="Arc Security Logo"/>
        {navItems.map((item) => (
            <NavLabel label={item} isActive={props.page === item}>
                {item}
            </NavLabel>
        ))}
      </div>
  );
}

class NavLabel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Link to={"/portal/" + this.props.label} style={{margin: "0px"}}>
        <div className={`${this.props.isActive ? styles.active : styles.inactive} ${styles.label}`}>
          {this.props.label}
        </div>
      </Link>
    );
  }
}