import MarioAdrianA from "../../assets/Mario and Adrian A.jpg";
import MarioAdrianB from "../../assets/Mario and Adrian b.jpg";

const About = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src={MarioAdrianA}
                        className="d-block mx-lg-auto img-fluid"
                        alt="Mario and Adrian"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        About Little Lemon
                    </h1>
                    <p className="lead">
                        Little Lemon is owned by two Italian brothers, Mario and
                        Adrian, who moved to the United States to pursue their
                        shared dream of owning a restaurant. To craft the menu,
                        Mario relies on family recipes and his experience as a
                        chef in Italy. Adrian does all the marketing for the
                        restaurant and led the effort to expand the menu beyond
                        classic Italian to incorporate additional cuisines from
                        the Mediterranean region.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
