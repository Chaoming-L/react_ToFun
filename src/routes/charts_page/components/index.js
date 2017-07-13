/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { qnfetch, pvURL } from 'assets/utils/request'
import setTitle from 'hoc/set_app_title'
import { Tabs, Tab } from 'material-ui/Tabs'
import PvChart from './pv_chart'

@setTitle('😂😂😂')
export default class ChartsPage extends React.Component {
    constructor() {
        super()
        this.state = {
            month: {},
            week: {},
            day: {}
        }
    }
    componentWillMount() {
        this.fetchChartDate('month')
    }

    fetchChartDate = (chartType) => {
        let that = this
        qnfetch(pvURL.Get_pv, { query: chartType }, 'POST')
            .then(data => data.json())
            .then(resData => {
                if (resData.code == 0) {
                    that.setState({ [chartType]: resData })
                } else {
                    console.log(resData)
                }
            })
            .catch(err => console.log(err))
    }

    handleChange = (chartType) => {
        if (this.state[chartType].code !== 0) {
            this.fetchChartDate(chartType)
        }
    }

    render() {
        const { month, week, day } = this.state

        return (
            <div>
                <Tabs onChange={this.handleChange}>
                    <Tab label="Month" value='month' >
                        <PvChart chartType='month' option={month} />
                    </Tab>
                    <Tab label="Week" value='week' >
                        <PvChart chartType='week' option={week} />
                    </Tab>
                    <Tab label="Day" value='day' >
                        <PvChart chartType='day' option={day} />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
