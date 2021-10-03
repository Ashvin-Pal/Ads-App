import "./App.css";
import { Navbar } from "./components";
import { Routes } from "./routes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="App-content">
                <Routes />
            </div>
        </div>
    );
}

export default App;
