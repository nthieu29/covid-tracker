import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import CardInfo from "../Card/CardInfo";
import CountryPicker from "../CountryPicker/CountryPicker";
import CountryDetailLineChart from "../Chart/CountryDetailLineChart";
import CountryDetailPieChart from "../Chart/CountryDetailPieChart";
import API from "../../api/API";

class CountryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: "",
            currentStatus: {
                infected: 0,
                recovered: 0,
                dead: 0,
            },
            timelineData: [],
        }
        this.loadDetail = this.loadDetail.bind(this);
    }

    loadDetail(countrySlug) {
        console.log("Country slug: " + countrySlug);
        API.get("/total/country/" + countrySlug).then(response => {
            const timelineData = response.data.map(countryEntry => {
                return {
                    date: new Date(countryEntry["Date"]).toISOString().slice(0, 10),
                    infected: countryEntry["Confirmed"],
                    recovered: countryEntry["Recovered"],
                    dead: countryEntry["Deaths"]
                }
            });
            const latestEntry = response.data[response.data.length - 1];
            const selectedCountry = latestEntry["Country"];
            const currentStatus = {
                infected: latestEntry["Confirmed"],
                recovered: latestEntry["Recovered"],
                dead: latestEntry["Deaths"]
            };
            this.setState({
                selectedCountry,
                currentStatus,
                timelineData,
            });
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.loadDetail("vietnam");
    }

    render() {
        return (
            <Grid container direction="column"
                  justify="center"
                  alignItems="stretch">
                <Grid item>
                    <CardInfo currentStatus={this.state.currentStatus}/>
                </Grid>
                <Grid item>
                    <CountryPicker onChangeHandler={this.loadDetail} selectedCountry={this.state.selectedCountry}/>
                </Grid>
                <Grid item align="center">
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <CountryDetailLineChart timelineData={this.state.timelineData}/>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CountryDetailPieChart timelineData={this.state.timelineData}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default CountryDetail;