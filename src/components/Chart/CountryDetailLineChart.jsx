import React, {Component} from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


class CountryDetailLineChart extends Component {
    constructor(props) {
        super(props);
    }

    convertLineChartData(timelineData) {
        let lineData = timelineData.filter(entry => entry.infected + entry.recovered + entry.dead > 0);
        if (lineData.length === 0) {
            return [
                {
                    date: 0,
                    infected: 0,
                    recovered: 0,
                    dead: 0
                }
            ]
        }
        return lineData;
    }

    render() {
        let lineData = this.convertLineChartData(this.props.timelineData);
        return (
            <ResponsiveContainer width="90%" height={500}>
                <LineChart data={lineData}
                           margin={{top: 40, right: 20, left: 20, bottom: 20}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dot={false} dataKey="infected" stroke="rgb(255, 152, 0)"/>
                    <Line type="monotone" dot={false} dataKey="recovered" stroke="rgb(76, 175, 80)"/>
                    <Line type="monotone" dot={false} dataKey="dead" stroke="rgb(244, 67, 54)"/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default CountryDetailLineChart;