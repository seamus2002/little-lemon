import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../utils/api";
import BookingForm from "../components/BookingForm/BookingForm";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
];

const BookingPage = () => {
    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    const navigate = useNavigate();

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if (response) navigate("/confirmed-booking");
    };

    return (
        <div className="px-4 py-5">
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitForm={submitForm}
            />
        </div>
    );
};

export default BookingPage;
