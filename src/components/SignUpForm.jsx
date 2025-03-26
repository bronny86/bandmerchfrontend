import React, { useState } from "react";
import "../App.css";

export function SignUpForm() {
    const [bandName, setBandName] = useState("");
    const [email, setEmail] = useState("");
    const [label, setLabel] = useState("");
    const [genre, setGenre] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bandName, email, label, genre, location, contact);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bandName">Band Name:</label>
            <input
                type="text"
                id="bandName"
                name="bandName"
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
                autoComplete="organization" // Add autocomplete attribute
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email" // Add autocomplete attribute
                required
            />

            <label htmlFor="label">Label:</label>
            <input
                type="text"
                id="label"
                name="label"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                autoComplete="organization-title" // Add autocomplete attribute
            />

            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                id="genre"
                name="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                autoComplete="off" // Disable autocomplete if not needed
            />

            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                autoComplete="address-line1" // Add autocomplete attribute
            />

            <label htmlFor="contact">Contact:</label>
            <input
                type="tel"
                id="contact"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                autoComplete="tel" // Add autocomplete attribute
            />

            <button type="submit">Submit</button>
        </form>
    );
}