import React, { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("None");
    const [availableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform reservation submission logic here
    };

    return (
        <form
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
            onSubmit={handleSubmit}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((timeOption, index) => (
                    <option key={index}>{timeOption}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;
