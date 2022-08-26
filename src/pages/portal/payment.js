import React from "react";
import PortalNav from "../../components/PortalNav.js";
import PortalHeader from '../../components/PortalHeader.js';
import portalStyles from './portal.module.css';

const Payment = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Payment"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <PaymentSvg />
                    Payment
                </PortalHeader>
                {/* Insert all main content below header here */}
            </main>
        </div>
    )
}

export default Payment;

class PaymentSvg extends React.Component {
    render() {
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="black" />
        </svg>
      );
    }
  }