const Testimony = (props) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={props.image}
                        className="img-fluid profile"
                        alt="profile"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="text-yellow">{props.rating}</p>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimony;
