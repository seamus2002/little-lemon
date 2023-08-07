import logo from "../assets/Logo.svg";
import LargeButton from "../components/LargeButton/LargeButton";

const ConfirmedBookingPage = () => {
    return (
        <div class="px-4 py-5 my-5 text-center">
            <img
                class="d-block mx-auto mb-4"
                src={logo}
                alt="logo"
                width="444"
                height="120"
            />
            <h1 class="display-5 fw-bold text-body-emphasis">
                Your reservation has been confirmed.
            </h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                    We kindly ask that you notify us at least 24 hours in
                    advance if you need to cancel or modify your reservation.
                    Late cancellations may incur a fee.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <LargeButton text="Back to Home" link="/" />
                </div>
            </div>
        </div>
    );
};

export default ConfirmedBookingPage;
