import React, {useState} from 'react';
import './App.css';

function App() {
    const [light, setLight] = useState(true);
    console.log(light);

    return (
        <main className={light === true ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => setLight(!light)}>{light === true ? "Turn off" : "Turn on"}</button>
            </section>
        </main>
    );
}



export default App;
