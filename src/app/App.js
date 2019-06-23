import React from 'react';
import PageTemplate from "./PageTemplate";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const App = () => {
    return (

        <div className="App">
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <CssBaseline/>
                <PageTemplate/>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default App;
