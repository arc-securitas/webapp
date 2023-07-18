import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record._id}</td>
        <td>{props.record.fullName}</td>
        <td>{props.record.brokerage}</td>
        <td>{props.record.emailAddress}</td>
        <td>{props.record.streetAddress}</td>
        <td>{props.record.cityAddress}</td>
        <td>{props.record.stateAddress}</td>
        <td>{props.record.zipAddress}</td>

        <td>{props.record.phoneNumber}</td>
        <td>{props.record.email}</td>
        <td>{props.record.safetyCode}</td>
        <td>{props.record.status}</td>
        <td>{props.record.location}</td>
        <td><Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link></td>
        <td><Link className="btn btn-link" to={`/addEvent/${props.record._id}`}>Add Event</Link></td>
        <td>
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
);

const BackendTest = () => {
    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`/api/agents/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);


    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }

    const [form, setForm] = useState({
        fullName: "",
        brokerage: "",
        emailAddress: "",
        streetAddress: "",
        cityAddress: "",
        stateAddress: "",
        zipAddress: "",
        phoneNumber: "",
        email: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newAgent = { ...form };

        await fetch("/api/agents/add", {
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

        setForm({ fullName: "", brokerage: "", emailAddress: "", streetAddress: "", cityAddress: "", stateAddress: "", zipAddress: "", phoneNumber: "", email: "" });
        navigate("/");
    }

    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`/api/agents/delete/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }


    return (
        <div>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        {/* 
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        */}
                        <th>Full Name</th>
                        <th>Brokerage</th>
                        <th>Street Address</th>
                        <th>City Address</th>
                        <th>State Address</th>
                        <th>Zip Address</th>
                        <th>Email</th>
                        <th>Safety Code</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Edit Agent</th>
                        <th>Add Event</th>
                        <th>Delete Agent</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>

            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        defaultValue={form.fullName}
                        onChange={(e) => updateForm({ fullName: e.target.value })}
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="brokerage">Brokerage</label>
                    <input
                        type="text"
                        className="form-control"
                        id="brokerage"
                        defaultValue={form.brokerage}
                        onChange={(e) => updateForm({ brokerage: e.target.value })}
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="streetAddress">Street Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="streetAddress"
                        defaultValue={form.streetAddress}
                        onChange={(e) => updateForm({ streetAddress: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cityAddress">City Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cityAddress"
                        defaultValue={form.cityAddress}
                        onChange={(e) => updateForm({ cityAddress: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="stateAddress">State Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="stateAddress"
                        defaultValue={form.stateAddress}
                        onChange={(e) => updateForm({ stateAddress: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="zipAddress">Zip Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="zipAddress"
                        defaultValue={form.zipAddress}
                        onChange={(e) => updateForm({ zipAddress: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">phoneNumber</label>
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
                    <input
                        type="submit"
                        value="Create agent"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}




export default BackendTest;