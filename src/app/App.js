import React from 'react';
import MainPage from "./MainPage";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faUser, faBell, faCog, faSignOutAlt, faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faUser, faBell, faCog, faSignOutAlt, faChevronRight, faChevronLeft);


const App = () => {
    return (
        <div className="App">
            <MainPage/>
        </div>
    );
};

export default App;
