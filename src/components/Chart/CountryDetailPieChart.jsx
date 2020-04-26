import React, {Component} from 'react';
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

class CountryDetailPieChart extends Component {
    extractDataForPieChart(timelineData) {
        let latestData = timelineData[timelineData.length - 1];
        if (!latestData) latestData = {};
        return [
            {
                "name": "Active",
                "value": latestData.infected - latestData.recovered - latestData.dead
            },
            {
                "name": "Recovered",
                "value": latestData.recovered
            },
            {
                "name": "Dead",
                "value": latestData.dead
            }
        ];
    }

    render() {
        let cellColors = [
            "rgb(33, 150, 243)",
            "rgb(76, 175, 80)",
            "rgb(244, 67, 54)"
        ];
        let pieData = this.extractDataForPieChart(this.props.timelineData);
        return (
            <ResponsiveContainer width="100%" height={500}>
                <PieChart width={500} height={250}
                          margin={{top: 20, right: 20, left: 20, bottom: 20}}>
                    <Pie data={pieData} dataKey="value" nameKey="name" label>
                        {
                            pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={cellColors[index]}/>
                            ))
                        }
                    </Pie>
                    <Legend verticalAlign="bottom" align="center"/>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}

export default CountryDetailPieChart;