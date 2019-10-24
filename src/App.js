import React, {Fragment} from 'react';
import './App.css';
import Header from './layoutes/Header'
import Main from './layoutes/Main'

function App() {
    return (
        <Fragment>
            <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar" >
                <Header />
                <Main />
            </div>

            <div className="app-drawer-overlay d-none animated fadeIn" ></div >
        </Fragment>
    );
}

export default App;
