import React from "react";
import {NavLink} from "react-router-dom";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import {withStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TimerIcon from '@material-ui/icons/Timer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PersonIcon from "@material-ui/icons/Person";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker} from "@material-ui/pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Box from "@material-ui/core/Box";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({

    leftNavigation: {
        position: 'fixed',
        top: window.innerHeight/2 - 65 + 'px',
        left: '30px'
    },

    rightNavigation: {
        position: 'fixed',
        top: window.innerHeight/2 -65 + 'px',
        right: '0px'
    },

    largeArrow: {
        fontSize: '130px',
    },

    addButton: {
        position: 'fixed',
        bottom: '40px',
        right: '40px'
    },

    formBox: {
    },

    contentBox: {
        marginTop: theme.spacing(15)
    },

    formText: {
        display: 'inline-block',
        marginTop: '24px',
        marginBottom: '4px',
        marginRight: '10px',
        marginLeft: '10px'
    },

    formControl: {
    },

    reminderPhotoBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    reminderHeading: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        lineHeight: '50px'
    },

    statusIcon: {
        fontSize: '50px'
    },

    actionIcon: {
        fontSize: '40px'
    }
});

class BorrowedPage extends React.Component {

    state = {
        reminders: [
            {
                name: "Drill",
                from: "John",
                date: moment().add('5', 'days'),
                details: "Drill should still work.",
                status: 'new'
            },
            {
                name: "Car",
                from: "Monica",
                date: moment().subtract('1', 'days'),
                details: "Car should be clean",
                status: 'new'
            }
        ],
        formOpen: false,
        name: "",
        from: "",
        date: moment(),
        details: ""
    };

    addReminder = () => {
        this.setState((prevState, props) => {
            return ({reminders: [...prevState.reminders, {
                        name: this.state.name,
                        from: this.state.from,
                        date: this.state.date,
                        details: this.state.details,
                        status: 'new'
                    }]}
            );
        });
        this.closeForm();
    };

    returnItem = (name) => {
        let newReminders = this.state.reminders.map(reminder => {
            if(reminder.name === name) {
                return {
                    name: reminder.name,
                    from: reminder.from,
                    date: reminder.date,
                    details: reminder.details,
                    status: 'returned'
                };
            } else {
                return reminder;
            }
        });
        this.setState({reminders: newReminders})
    };

    removeItem = (name) => {
        let newReminders = this.state.reminders.filter(reminder => reminder.name !== name);
        this.setState({reminders: newReminders})
    };

    closeForm = () => {
        this.setState((prevState, props) => {
            return ({
                formOpen: false,
                name: "",
                date: moment(),
                from: "",
                details: "",
                reminders: prevState.reminders
            })
        });
    };

    openForm = () => {
        this.setState({formOpen: true});
    };

    handleChange = (fieldName, event) => {
        this.setState({[fieldName]: event.target.value});
    };

    handleDateChange = (event) => {
        this.setState({date: event});
    };

    renderForm = (classes) => {
        return (
            <Dialog open={this.state.formOpen} onClose={this.closeForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new reminder</DialogTitle>
                <DialogContent className={classes.formBox}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <span className={classes.formText}>I lent</span>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={this.state.name}
                                onChange={event => this.handleChange("name", event)}
                                autoFocus
                                fullWidth
                                margin="dense"
                                id="name"
                                label="Item name"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <span className={classes.formText}>To</span>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.formControl} fullWidth margin="dense">
                                <InputLabel htmlFor="from-simple">Choose a user</InputLabel>
                                <Select
                                    fullWidth
                                    value={this.state.from}
                                    onChange={event => this.handleChange("from", event)}
                                    inputProps={{
                                        name: 'from',
                                        id: 'from-simple',
                                    }}>

                                    <MenuItem value={"John"}>John</MenuItem>
                                    <MenuItem value={"Monica"}>Monica</MenuItem>
                                    <MenuItem value={"Jim"}>Jim</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <span className={classes.formText}>Until</span>
                        </Grid>
                        <Grid item xs={6}>
                            <KeyboardDatePicker
                                fullWidth
                                margin="dense"
                                id="mui-pickers-date"
                                label="Choose a date"
                                value={this.state.date}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <span className={classes.formText}>We agree that</span>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                fullWidth
                                multiline
                                value={this.state.details}
                                onChange={event => this.handleChange("details", event)}
                                margin="dense"
                                id="name"
                                label="Write agreement details"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.addReminder} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    renderStatusIcon = (classes, reminder) => {
        if(reminder.status === 'returned') {
            return (<CheckCircleIcon color="secondary" className={classes.statusIcon}/>);
        }
        let dueTime = reminder.date;
        let currentTime = moment();
        if(dueTime >= currentTime) {
            return (<TimelapseIcon color="disabled" className={classes.statusIcon}/>);
        } else {
            return (<ErrorOutlineIcon color="primary" className={classes.statusIcon}/>);
        }
    };

    renderReturnItemButton = (classes, reminder) => {
        if(reminder.status !== "returned") {
            return (<IconButton onClick={() => this.returnItem(reminder.name)}>
                <CheckCircleIcon color="secondary"
                                 className={classes.actionIcon} />
            </IconButton>);
        }
    };

    renderDeleteItemButton = (classes, reminder) => {
        return (<IconButton onClick={() => this.removeItem(reminder.name)}>
            <HighlightOffIcon color="primary"
                              className={classes.actionIcon}/>
        </IconButton>);
    };

    render() {
        // TODO: Extract common code from BorrowedPage and BorrowedPage
        const {classes} = this.props;
        const arrowColorStyle = {color: this.props.theme.palette.primary.main };
        return (
            <Grid container spacing={1}>
                <Hidden xsDown>
                    <div className={classes.leftNavigation}>
                        <NavLink to="/borrowed">
                            <ArrowBackIos className={classes.largeArrow} style={arrowColorStyle}/>
                        </NavLink>
                    </div>
                </Hidden>
                <Grid item sm={2} xs={1}>
                </Grid>
                <Grid item sm={8} xs={10} className={classes.contentBox}>
                    {
                        this.state.reminders
                            .filter(reminder => reminder.status === "new" || reminder.status === "returned")
                            .map(reminder => <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">

                                        {this.renderStatusIcon(classes, reminder)}
                                        <Typography variant="h6" component="h6" className={classes.reminderHeading}>
                                            {reminder.name}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Grid container spacing={1}>
                                            <Grid item sm={3} xs={12}>
                                                <Grid container direction="row" alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <TimerIcon color="disabled"/>
                                                    </Grid>
                                                    <Grid item>
                                                        {reminder.date.format('DD-MM-YYYY')}
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <PersonIcon color="disabled"/>
                                                    </Grid>
                                                    <Grid item>
                                                        {reminder.from}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sm={9} xs={12}>
                                                <Typography>
                                                    {reminder.details}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container direction="row-reverse" spacing={0}>
                                                    <Grid item>
                                                        {this.renderReturnItemButton(classes, reminder)}
                                                    </Grid>
                                                    <Grid item>
                                                        {this.renderDeleteItemButton(classes, reminder)}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )}
                </Grid>
                <Hidden xsDown>
                    <div className={classes.rightNavigation}>
                        <NavLink to="/borrowed">
                            <ArrowForwardIos className={classes.largeArrow} style={arrowColorStyle}/>
                        </NavLink>
                    </div>
                </Hidden>
                <Grid item sm={2} xs={1}>
                </Grid>
                <Fab color="secondary" aria-label="Add note" className={classes.addButton} onClick={this.openForm}>
                    <AddIcon />
                </Fab>
                {this.renderForm(classes)}
            </Grid>
        );
    }
}

export default withStyles(styles)(BorrowedPage)
