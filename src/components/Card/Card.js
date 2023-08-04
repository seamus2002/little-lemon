const Card = (props) => {
    return (
        <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                src={props.image}
                width="100%"
                height="225"
                alt="item"
            />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{props.name}</h5>
                    <p>${props.price}</p>
                </div>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, kld lorem, ar Aenean convallis
                    nis lorem dolar iqsf is sf hp semet In dolar iqsf is sf hp
                    semet In
                </p>
                <a href="/" class="btn btn-primary">
                    Order a Delivery
                </a>
            </div>
        </div>
    );
};

export default Card;
