import "./App.css";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Nav from "./containers/Nav/Nav";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
