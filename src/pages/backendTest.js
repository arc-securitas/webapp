import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record._id}</td>
        <td>{props.record.name}</td>
        <td>{props.record.phoneNumber}</td>
        <td>{props.record.safetyCode}</td>
        <td>{props.record.status}</td>
        <td>{props.record.__v}</td>
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

    return (
        <div>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Safety Code</th>
                        <th>Status</th>
                        <th>__v</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}




export default BackendTest;