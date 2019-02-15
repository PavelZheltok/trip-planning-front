import React from 'react';
import Calendar from 'react-calendar';
import Grid from '@material-ui/core/Grid';

class MyCalendar extends React.Component {
    render(): React.ReactNode {
        return (
            <Grid  container spacing={24}>
                <Grid item xs>
                    <h1>Start</h1>
                    <Calendar/>
                </Grid>
                <Grid item xs>
                    <h1>End</h1>
                    <Calendar/>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>


        )
    }
}

export default MyCalendar;

