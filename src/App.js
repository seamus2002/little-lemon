import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Nav from "./containers/Nav/Nav";
import Footer from "./containers/Footer/Footer";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route
                    path="/confirmed-booking"
                    element={<ConfirmedBookingPage />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
