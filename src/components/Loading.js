import React, { Component } from 'react'
import IMG from '../vendor/img/loading.gif'

export default class Loading extends Component {
    render() {
        return (
            <div
                className="position-fixed"
                style={{
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '9999999',
                    background: '#000'
                }}
            >
                <div className="d-table w-100 h-100">
                    <div className="d-table-cell align-middle text-center">
                        <img src={IMG} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
