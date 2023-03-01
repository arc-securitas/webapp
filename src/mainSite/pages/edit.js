import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        records: [],
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`/api/agents/${params.id.toString()}`);

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

            setForm(record);
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
        const editedPerson = {
            firstName: form.firstName,
            middleName: form.middleName,
            lastName: form.lastName,
            phoneNumber: form.phoneNumber,
            email: form.email,
        };

        // This will send a post request to update the data in the database.
        await fetch(`/api/agents/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedPerson),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <div>
            <h3>Update Record</h3>
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
                        value="Update agent"
                        className="btn btn-primary"
                    />
                </div>
            </form>
            <br /><br /><br /><br />
        </div>
    );
}