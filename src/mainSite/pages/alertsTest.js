import React, { useEffect, useState } from "react";

const Record = (props) => (
    <tr>
        <td>{props.record._id}</td>
        <td>{props.record.agent}</td>
        <td>{props.record.event}</td>
        <td>{props.record.audioTranscription}</td>
    </tr>
);

const AlertsTest = () => {
    const [form, setForm] = useState({
        startDate: null,
        endDate: null
    });

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    const [records, setRecords] = useState([]);
    
    const [filteredRecords, setFilteredRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`/alerts/`);

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

    async function getFilteredRecords() {
        const response = await fetch(`/alerts/${form.startDate}/${form.endDate}`);

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const filteredRecords = await response.json();
        setFilteredRecords(filteredRecords);
    }


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


    // This method will map out the records on the table
    function filteredRecordList() {
        return filteredRecords.map((record) => {
            return (
                <Record
                    record={record}
                    key={record._id}
                />
            );
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        await getFilteredRecords();
    }

    return (
        <div>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Agent</th>
                        <th>Event</th>
                        <th>Audio Transcription</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>

            <h3>Filter Records</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date and Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="startDate"
                        defaultValue={form.startDate}
                        onChange={(e) => updateForm({ startDate: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endDate">End Date and Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="endDate"
                        defaultValue={form.endDate}
                        onChange={(e) => updateForm({ endDate: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Filter Alerts"
                        className="btn btn-primary"
                    />
                </div>
            </form>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Agent</th>
                        <th>Event</th>
                        <th>Audio Transcription</th>
                    </tr>
                </thead>
                <tbody>{filteredRecordList()}</tbody>
            </table>

        </div>
    );
}




export default AlertsTest;