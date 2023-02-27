import React from "react";
import PortalNav from "../components/PortalNav.js";
import PortalHeader from '../components/PortalHeader.js';
import portalStyles from './portal.module.css';
import agentsStyles from './agents.css'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useAuth0 } from "@auth0/auth0-react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record.firstName + " " + props.record.lastName}</td>
        <td>{props.record.phoneNumber}</td>
        <td>{props.record.email}</td>
        <td>{props.record._id}</td>
        <td>
            <MoreHorizIcon onClick={() => {
                props.deleteRecord(props.record._id);
            }}/>
        </td>
        {/* <td><Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link></td>
        <td><Link className="btn btn-link" to={`/addEvent/${props.record._id}`}>Add Event</Link></td>
        <td>
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
                Delete
            </button>
        </td> */}
    </tr>
);

const RecordTable = () => {
    const { user } = useAuth0();
    const [records, setRecords] = useState([]);

    // displayRecords is the list of records that we want to display 
    // in the page. All the filtering (search) and categorizing (active / pending / inactive)
    // happens on displayRecords
    const [displayRecords, setDisplayRecords] = useState(records);

    // This method fetches the records from the database.
    // and store the list of agents in records
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`/agents/${user.email}`)
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
            setDisplayRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);


    // filtering displayRecords to be active
    const activeRecords = displayRecords.filter(displayRecord => displayRecord.status == "active");

    function activeList() {
        return activeRecords.map((activeRecords) => {
            return (
                <Record
                    record={activeRecords}
                    deleteRecord={() => deleteRecord(activeRecords._id)}
                    key={activeRecords._id}
                />
            );
        });
    }

    // filtering displayRecords to be pending
    const pendingRecords = displayRecords.filter(displayRecord => displayRecord.status == "pending");

    function pendingList() {
        return pendingRecords.map((pendingRecords) => {
            return (
                <Record
                    record={pendingRecords}
                    deleteRecord={() => deleteRecord(pendingRecords._id)}
                    key={pendingRecords._id}
                />
            );
        });
    }

    // filtering displayRecords to be inactive
    const inactiveRecords = displayRecords.filter(displayRecord => displayRecord.status == "inactive");

    function inactiveList() {
        return inactiveRecords.map((inactiveRecords) => {
            return (
                <Record
                    record={inactiveRecords}
                    deleteRecord={() => deleteRecord(inactiveRecords._id)}
                    key={inactiveRecords._id}
                />
            );
        });
    }

    // search is for storing input in search bar
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        const searchResults = records.filter(record => `${record.firstName} ${record.lastName}`.includes(search));
        setDisplayRecords(searchResults);
    }

    // for create new agents form
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        licenseID: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // make a post request to add agents on server
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newAgent = { ...form };

        await fetch("/agents/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAgent),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ firstName: "", lastName: "", phoneNumber: "", email: "", licenseID: "" });
        navigate("/");
    }

    // make a delete request to delete a record on server
    async function deleteRecord(id) {
        await fetch(`/agents/delete/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="container searchbar p-3">
                <h4>Search Agents</h4>
                <Form type="submit" onSubmit={handleSearch} >
                    <input type="text" className="searchAgents" value={search} onChange={(event) => setSearch(event.target.value)} />
                </Form>
             </div>
            
            <div className="threeTable">
                <h4>Active</h4>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>License ID</th>
                        </tr>
                    </thead>
                    <tbody>{activeList()}</tbody>
                </table>

                <h4>Pending</h4>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>License ID</th>
                        </tr>
                    </thead>
                    <tbody>{pendingList()}</tbody>
                </table>

                <h4>Inactive</h4>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>License ID</th>
                        </tr>
                    </thead>
                    <tbody>{inactiveList()}</tbody>
                </table>
            </div>

            <Button id="add-agent-button" onClick={handleShow}>
                + Add New Agent
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                defaultValue={form.firstName}
                                onChange={(e) => updateForm({ firstName: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                defaultValue={form.lastName}
                                onChange={(e) => updateForm({ lastName: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phoneNumber"
                                defaultValue={form.phoneNumber}
                                onChange={(e) => updateForm({ phoneNumber: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                defaultValue={form.email}
                                onChange={(e) => updateForm({ email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="licenseID">License ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="licenseID"
                                defaultValue={form.licenseID}
                                onChange={(e) => updateForm({ email: e.target.value })}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Agent
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


const Agents = () => {
    return (
        <div className={portalStyles.portal}>
            <div className={portalStyles.nav}><PortalNav page="Agents"/></div>
            <main className={portalStyles.main}>
                <PortalHeader>
                    <PeopleSvg />
                    Manage Agents
                </PortalHeader>
                {/* Insert all main content below header here */}
                <RecordTable />
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