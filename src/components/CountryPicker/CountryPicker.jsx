import React, {Component} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import countryList from "../../data/CountryList";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

class CountryPicker extends Component {
    constructor(props) {
        super(props);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.loadDetailForCountry = this.props.onChangeHandler;
    }

    handleChangeCountry(event, value) {
        if (value) {
            this.loadDetailForCountry(value.slug);
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} align="center">
                        <Typography color="textPrimary" variant="h3" gutterBottom>
                            {this.props.selectedCountry}
                        </Typography>
                    </Grid>
                    <Grid item sm={4}></Grid>
                    <Grid item xs={12} sm={4}>
                        <Autocomplete
                            id="country-select-demo"
                            options={countryList}
                            classes={{
                                option: classes.option,
                            }}
                            autoHighlight
                            getOptionLabel={(option) => option.name}
                            renderOption={(option) => (
                                <React.Fragment>
                                    <span>{this.countryToFlag(option.iso2)}</span>
                                    {option.name} ({option.iso2})
                                </React.Fragment>
                            )}
                            onChange={this.handleChangeCountry}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Choose a country"
                                    variant="outlined"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item sm={4}></Grid>
                </Grid>
            </Container>
        );
    }

    countryToFlag(code) {
        return typeof String.fromCodePoint !== 'undefined'
            ? code
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
            : code;
    }
}

export default withStyles(styles, {withTheme: true})(CountryPicker);