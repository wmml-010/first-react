import React, { Component } from 'react'
import HOMEBG from '../vendor/img/home-bg.jpg'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{backgroundImage: "url("+ HOMEBG +")"}}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>My Clean Blog</h1>
                            <span className="subheading">A Blog Theme</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
            </div>
        )
    }
}
