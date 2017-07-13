/**
 * Created by Damon on 2017/5/29.
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default class PvChart extends React.Component {
    defaultOption = {
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
        toolbox: {
            feature: {
                saveAsImage: {}
            }
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
                data: []
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
                data: []
            }
        ]
    }

    render() {
        const { option } = this.props
        this.defaultOption.xAxis[0].data = option.date
        this.defaultOption.series[0].data = option.count
        return (
            <div>
                <ReactEcharts option={this.defaultOption} theme='macarons' />
            </div>
        )
    }
}
