import { useState } from "react";
import FormField from "../FormField/FormField";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitForm }) => {
    const earliestDate = new Date().toISOString().split("T")[0];
    const defaultTime = availableTimes[0];
    const minGuests = 1;
    const maxGuests = 10;

    // Error Messages
    const occasions = ["Birthday", "Anniversary"];
    const invalidDateError = "Please choose a valid date.";
    const invalidTimeError = "Please choose a valid time slot.";
    const invalidOccasionError = "Please choose a valid occasion.";
    const invalidGuestsError = "Please enter a number between 1 and 10.";

    // State Hooks
    const [date, setDate] = useState(earliestDate);
    const [time, setTime] = useState(defaultTime);
    const [guests, setGuests] = useState(minGuests);
    const [occasion, setOccasion] = useState(occasions[0]);

    // Validators
    const isDateValid = () => date !== "";
    const isTimeValid = () => time !== "";
    const isNumberOfGuestsValid = () => guests !== "";
    const isOccasionValid = () => occasion !== "";
    const areAllFieldsValid = () =>
        isDateValid() &&
        isTimeValid() &&
        isNumberOfGuestsValid() &&
        isOccasionValid();

    // Handlers
    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = (e) => setTime(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, time, guests, occasion });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <FormField
                label="Date"
                htmlFor="booking-date"
                hasError={!isDateValid()}
                errorMessage={invalidDateError}
            >
                <input
                    type="date"
                    id="booking-date"
                    name="booking-date"
                    min={earliestDate}
                    value={date}
                    required={true}
                    onChange={handleDateChange}
                />
            </FormField>
            <FormField
                label="Time"
                htmlFor="booking-time"
                hasError={!isTimeValid()}
                errorMessage={invalidTimeError}
            >
                <select
                    id="booking-time"
                    name="booking-time"
                    value={time}
                    required={true}
                    onChange={handleTimeChange}
                >
                    {availableTimes.map((times) => (
                        <option data-testid="booking-time-option" key={times}>
                            {times}
                        </option>
                    ))}
                </select>
            </FormField>
            <FormField
                label="Number of guests"
                htmlFor="booking-number-guests"
                hasError={!isNumberOfGuestsValid()}
                errorMessage={invalidGuestsError}
            >
                <input
                    type="number"
                    id="booking-number-guests"
                    name="booking-number-guests"
                    value={guests}
                    min={minGuests}
                    max={maxGuests}
                    required={true}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </FormField>
            <FormField
                label="Occasion"
                htmlFor="booking-occasion"
                hasError={!isOccasionValid()}
                errorMessage={invalidOccasionError}
            >
                <select
                    id="booking-occasion"
                    name="booking-occasion"
                    value={occasion}
                    required={true}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    {occasions.map((occasion) => (
                        <option
                            data-testid="booking-occasion-option"
                            key={occasion}
                        >
                            {occasion}
                        </option>
                    ))}
                </select>
            </FormField>
            <button
                className="btn btn-primary"
                type="submit"
                disabled={!areAllFieldsValid()}
            >
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;
