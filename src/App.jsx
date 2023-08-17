import Headers from "./Headers";
import Sideber from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

import "./App.css"

const App = () => {
    return (
        <>
            <Headers />
            <div id='main'>
                <Sideber />
                <Content />
            </div>
            <Footer />
        </>
    );
};

export default App;