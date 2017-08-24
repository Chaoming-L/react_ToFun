import React from 'react'
import io from 'socket.io-client'

const socket = io('wss://tofun.selfcoding.cn/anonymous-chat/123')

export default class ChatIndex extends React.Component {
    componentDidMount() {
        socket.emit('222', (msg) => {
            console.log(msg)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}