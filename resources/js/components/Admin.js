import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layoutes/Header'
import Main from './layoutes/Main'

export default class Admin extends Component {
    render() {
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
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
