const Header = () => {
    return (
        <header className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src="bootstrap-themes.png"
                        className="d-block mx-lg-auto img-fluid"
                        alt="Header"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                        Little Lemon
                    </h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lacinia nec mi et ornare. Ut condimentum justo
                        libero, vitae aliquet ipsum porta eget. Nam dapibus
                        neque at massa faucibus sagittis. Proin condimentum
                        volutpat purus vitae commodo. Integer tempus ornare
                        vestibulum. Etiam vehicula augue leo. Donec ultrices
                        arcu ex, pharetra consequat sem tincidunt vel. Duis
                        volutpat eleifend pretium.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg px-4 me-md-2"
                        >
                            Reserve a Table
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
