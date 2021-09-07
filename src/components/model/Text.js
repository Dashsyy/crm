import React from 'react'
import {IdConsumer} from './appContext';
export default function Text() {
    return (
        <IdConsumer>
            {username => {
                return <div> From {username}</div>
            }}
        </IdConsumer>
    )
}
