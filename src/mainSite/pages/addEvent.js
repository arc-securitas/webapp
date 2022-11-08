import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function AddEvent() {
    let agent = null;
    const [form, setForm] = useState({
        name: "",
        client: "",
        location: "",
        startTime: new Date(),
        endTime: new Date(),
        eventType: "Other"
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`/agents/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            agent = record;
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const newEvent = { ...form };

        if (agent.events == null)
        {
            agent.events = [];
        }
        
        agent.events.push(newEvent);

        // This will send a post request to update the data in the database.
        await fetch(`/agents/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(agent),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <div>
            <h3>Add Event</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        defaultValue={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="client">Client</label>
                    <input
                        type="text"
                        className="form-control"
                        id="client"
                        defaultValue={form.client}
                        onChange={(e) => updateForm({ client: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        defaultValue={form.location}
                        onChange={(e) => updateForm({ location: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="startTime">Start Date and Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="startTime"
                        defaultValue={form.startTime}
                        onChange={(e) => updateForm({ startTime: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="endTime">End Date and Time</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="endTime"
                        defaultValue={form.endTime}
                        onChange={(e) => updateForm({ endTime: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="eventType">Event Type</label>
                    <select id="eventType" name="eventType" onChange={(e) => updateForm({ eventType: e.target.value })}>
                        <option value="Showing">Showing</option>
                        <option value="Open House">Open House</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Add agent event"
                        className="btn btn-primary"
                    />
                </div>
            </form>
            <br /><br /><br /><br />
        </div>
    );
}