import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Nav from "./containers/Nav/Nav";
import Footer from "./containers/Footer/Footer";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
