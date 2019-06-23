import React from 'react';

import Routes from "./Routes";

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faCheckSquare,
    faCoffee,
    faUser,
    faBell,
    faCog,
    faSignOutAlt,
    faChevronRight,
    faChevronLeft,
    faCheckCircle,
    faExclamationCircle,
    faClock
} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faUser, faBell, faCog, faSignOutAlt, faChevronRight, faChevronLeft, faCheckCircle, faExclamationCircle, faClock);


const App = () => {
    return (
        <div className="App">
            <Routes/>
        </div>
    );
};

export default App;
