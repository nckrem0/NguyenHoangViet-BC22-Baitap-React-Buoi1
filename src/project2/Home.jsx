import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Conent";
import Footer from "./Footer";


function Home() {
    return (
        <div>
            <Header />
            <div className="d-flex">
                <div className="w-25">
                    <Navigation />
                </div>
                <div className="w-75">
                    <Content />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home ;