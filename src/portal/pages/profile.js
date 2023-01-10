import React, { useEffect, useState } from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';
import styles from './profile.module.css';
import ProfileModal from '../components/ProfileModal.js';
import { useAuth0 } from '@auth0/auth0-react';

/*
  The profile page :)
  ------------------------------------------------------------------------------
  Accessed through the path "/portal/profile". See App.js for Route definitions.
*/

const Profile = () => {
	const [data, setData] = useState();
	const { user } = useAuth0();

	async function getRecords(user) {
		if (user) {
			const response = await fetch(`/managers/${user.email}`);

			if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

			setData(await response.json());
		}
	}

	useEffect(() => {
		getRecords(user);
	}, [user]);

	// If data is still loading in, display loading.
	if (data === undefined) {
		return (
			<div className={portalStyles.portal}>
				<div className={portalStyles.nav}><PortalNav page="Agents"/></div>
				<main className={portalStyles.main}>
					<PortalHeader>
						<ProfileSvg />
						Profile
					</PortalHeader>
					<div>Loading...</div>
				</main>
			</div>
		)
	} else {
		let user_metadata = data[0].user_metadata;
		return (
			<div className={portalStyles.portal}>
				<div className={portalStyles.nav}><PortalNav page="Profile"/></div>
				<main className={portalStyles.main}>
					<PortalHeader>
						<ProfileSvg />
						Profile
					</PortalHeader>
					{/* Insert all main content below header here */}
					<div className={styles.center}>
					  <div className={styles.column}>
							<div className={styles.row}>
								<div className={styles.header}>Account Information</div>
								<ProfileModal firstName={user_metadata.firstName} middleName={user_metadata.middleName} lastName={user_metadata.lastName} phoneNumber={user_metadata.phoneNumber} />
							</div>
							<div className={styles.horizontal} />
							<div className={styles.pair}>
								<div className={styles.title}>Name</div>
								<div className={styles.subtext}>{`${user_metadata.firstName} ${user_metadata.middleName} ${user_metadata.lastName}`}</div>
							</div>
							<div className={styles.horizontal} />
							<div className={styles.pair}>
								<div className={styles.title}>Phone Number</div>
								<div className={styles.subtext}>{user_metadata.phoneNumber}</div>
							</div>
					  </div>
					</div>
				</main>
			</div>
		)
	}
}

export default Profile;

class ProfileSvg extends React.Component {
	render() {
	  return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		  <path d="M17.2165 19.3323C15.9348 17.9008 14.0725 17 11.9998 17C9.92718 17 8.06492 17.9008 6.7832 19.3323" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		  <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	  );
	}
  }