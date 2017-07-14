/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import { connect } from 'react-redux'
import { qnfetch, pvURL } from 'assets/utils/request'
import setTitle from 'hoc/set_app_title'
import { Tabs, Tab } from 'material-ui/Tabs'
import ReactEcharts from 'echarts-for-react'

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
                    this.debuggerChart(chartType)
                } else {
                    console.log(resData)
                }
            })
            .catch(err => console.log(err))
    }

    // 修复切换tab图表消失的bug
    debuggerChart = (chartType) => {
        this[chartType].getEchartsInstance().dispose()
        let { [chartType]: option } = this.state
        this[chartType].getEchartsInstance().setOption(this.defaultOption(option))
    }

    handleChange = (chartType) => {
        if (this.state[chartType].code !== 0) {
            this.fetchChartDate(chartType)
        }
        this.debuggerChart(chartType)
    }

    defaultOption(option) {
        const { date, count } = option
        return {
            title: {
                text: '流量统计表'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                }
            },
            legend: {
                data: []
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '点击数',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: count
                }
            ]
        }
    }

    render() {
        const { month, week, day } = this.state

        return (
            <div>
                <Tabs onChange={this.handleChange}>
                    <Tab label="Month" value='month' >
                        <ReactEcharts option={this.defaultOption(month)} theme='macarons' ref={intanceDom => this.month = intanceDom} />
                    </Tab>
                    <Tab label="Week" value='week' >
                        <ReactEcharts option={this.defaultOption(week)} theme='macarons' ref={intanceDom => this.week = intanceDom} />
                    </Tab>
                    <Tab label="Day" value='day' >
                        <ReactEcharts option={this.defaultOption(day)} theme='macarons' ref={intanceDom => this.day = intanceDom} />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
