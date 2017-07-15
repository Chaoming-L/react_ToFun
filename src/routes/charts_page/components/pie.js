import React from 'react'
import { qnfetch, pvURL } from 'assets/utils/request'
import ReactEcharts from 'echarts-for-react'

export default class Pie extends React.Component {
    state = {
        data: []
    }

    defaultOption = (data) => {
        const os = data.map(x => x._id),
            total = data.map(x => ({ value: x.total, name: x._id }))

        return {
            title: {
                text: 'OS占比',
                x: 'left'
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: os
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },

                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    }
                }
            },
            calculable: true,
            series: [{
                name: 'os占比',
                type: 'pie',
                radius: [20, 110],
                // center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: total
            }]
        };

    }

    componentDidMount() {
        const that = this
        qnfetch(pvURL.Get_os)
            .then(response => response.json())
            .then(res => {
                if (res.code === 0) {
                    that.setState({ data: res.data })
                }
            })
            .catch(err => console.info(err))
    }

    render() {
        const { data } = this.state
        return ( <
            div >
            <
            ReactEcharts option = { this.defaultOption(data) }
            theme = 'macarons' / >
            <
            /div>
        )
    }
}