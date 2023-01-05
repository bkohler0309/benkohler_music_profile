import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import PastBands from "./PastBands";
import CurrentBands from "./CurrentBands";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Benjamin Kohler Musician Profile</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/pastBands">Past Bands</NavLink></li>
                    <li><NavLink to="/currentBands">Current Bands</NavLink></li>
                </ul>
                <div classname="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/pastBands" element={<PastBands />}/>
                    <Route path="/currentBands" element={<CurrentBands />}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;