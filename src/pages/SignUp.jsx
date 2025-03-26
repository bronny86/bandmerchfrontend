import React, { useState } from "react";
import "../App.css";

export function SignUp() { // Named export
    const [bandName, setBandName] = useState("");
    const [email, setEmail] = useState("");
    const [label, setLabel] = useState("");
    const [genre, setGenre] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            bandName,
            email,
            label,
            genre,
            location,
            contact,
        );
    };



    const handleReset = () => {
        setBandName("");
        setEmail("");
        setLabel("");
        setGenre("");
        setLocation("");
        setContact("");
    };

    return (
        <div className="App">
            <h1>Sign Up Form</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="bandname">Band Name*</label>
                    <input
                        type="text"
                        name="bandname"
                        id="bandname"
                        value={bandName}
                        onChange={(e) => setBandName(e.target.value)}
                        placeholder="Enter Band Name"
                        required
                    />
                    <label htmlFor="email">Enter Email*</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor="label">Label*</label>
                    <input
                        type="text"
                        name="label"
                        id="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="Enter Label"
                        required
                    />
                    <label htmlFor="genre">Genre*</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        placeholder="Enter Genre"
                        required
                    />
                    <label htmlFor="location">Location*</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Location"
                        required
                    />
                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile number"
                        required
                    />
                   
                    <button type="reset" value="reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" value="Submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}