/**
 * Created by samar.ferchichi on 17/10/2019.
 */

import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

function Main() {
    return (
        <div className="app-main" >
            <Sidebar />
            <Content />
        </div>
    );
}

export default Main;
