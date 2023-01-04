import React from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';
import styles from './account.module.css';
import AccountModal from '../components/AccountModal.js';

const Agents = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Agents"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <PeopleSvg />
                    Manage Account
                </PortalHeader>
                {/* Insert all main content below header here */}
                <div className={styles.center}>
                  <div className={styles.column}>
                    <div className={styles.header}>Account Settings</div>
                    <div clasName={styles.horizontal} />
                    <div className={styles.row}>
                      <div className={styles.column}>
                        <div className={styles.title}>Name</div>
                        <div className={styles.subtext}>John Doe</div>
                      </div>
                      <button>Change</button>
                      <AccountModal firstName="Logan" middleName="" lastName="Wang" phoneNumber="1234567890" />
                    </div>
                    <div clasName={styles.horizontal} />
                    <div className={styles.row}>
                      <div className={styles.column}>
                        <div className={styles.title}>Phone Number</div>
                        <div className={styles.subtext}>123-456-7890</div>
                      </div>
                      <button>Change</button>
                    </div>
                    <div clasName={styles.horizontal} />
                    <div className={styles.row}>
                      <div className={styles.column}>
                        <div className={styles.title}>Password</div>
                        <div className={styles.subtext}>Current password strength: Strong</div>
                      </div>
                      <button>Change</button>
                    </div>
                    <div clasName={styles.horizontal} />
                  </div>
                  <div className={styles.column}>
                    <div className={styles.header}>Edit Plan</div>
                    <div clasName={styles.horizontal} />
                    <div className={styles.row}>
                      <div className={styles.column}>
                        <div className={styles.title}>Current Plan</div>
                        <div className={styles.subtext}>Basic</div>
                      </div>
                      <button>Change</button>
                    </div>
                    <div clasName={styles.horizontal} />
                  </div>
                </div>
            </main>
        </div>
    )
}

export default Agents;

class PeopleSvg extends React.Component {
    render() {
        return (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z" fill="black"/>
            </svg>
        );
    }
}