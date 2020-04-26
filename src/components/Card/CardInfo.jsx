import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AdbIcon from '@material-ui/icons/Adb';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {green, orange, red} from "@material-ui/core/colors";
import CountUp from "react-countup";

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    }
});

class CardInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={5} justify="center">
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" variant="h5" component="h2" gutterBottom
                                            style={{color: orange[500]}}>
                                    <AdbIcon/> Infected
                                </Typography>
                                <Typography color="textPrimary" variant="h5" component="h2" gutterBottom>
                                    <CountUp end={this.props.currentStatus.infected} separator=","/>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" variant="h5" component="h2" gutterBottom
                                            style={{color: green[500]}}>
                                    <LocalHospitalIcon/> Recovered
                                </Typography>
                                <Typography color="textPrimary" variant="h5" component="h2" gutterBottom>
                                    <CountUp end={this.props.currentStatus.recovered} separator=","/>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" variant="h5" component="h2" gutterBottom
                                            style={{color: red[500]}}>
                                    <SentimentVeryDissatisfiedIcon/> Dead
                                </Typography>
                                <Typography color="textPrimary" variant="h5" component="h2" gutterBottom>
                                    <CountUp end={this.props.currentStatus.dead} separator=","/>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(CardInfo);