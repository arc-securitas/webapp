import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Record = (props) => (
    <tr>
        <td>{props.record._id}</td>
        <td>{props.record.firstName}</td>
        <td>{props.record.middleName}</td>
        <td>{props.record.lastName}</td>
        <td>{props.record.phoneNumber}</td>
        <td>{props.record.email}</td>
        <td>{props.record.safetyCode}</td>
        <td>{props.record.status}</td>
        <td>{props.record.location}</td>
    </tr>
);

const BackendTest = () => {
    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/agents/`);

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
                    key={record._id}
                />
            );
        });
    }

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
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
        console.log(form);

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newAgent = { ...form };

        await fetch("http://localhost:5000/agents/add", {
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

        setForm({ firstName: "", lastName: "", phoneNumber: "", email: "" });
        navigate("/");
    }

    return (
        <div>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Safety Code</th>
                        <th>Status</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>

            <h3>Create New Record</h3>
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
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}




export default BackendTest;