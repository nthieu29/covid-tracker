import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <NavBar/>
            <CountryDetail/>
        </React.Fragment>
    );
}

export default App;
