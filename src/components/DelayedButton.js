import React, { Component } from 'react'

export default class DelayedButton extends Component {

    timeOut(event) {
        event.persist();
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render() {
        return(
            <button onClick={(e) => this.timeOut(e)}>
                Delayed
            </button>
        )
    }
}
