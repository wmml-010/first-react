import React, { Component } from 'react'
import HomePosts from '../components/HomePosts'
import HOMEBG from '../vendor/img/post-sample-image.jpg'

export default class Posts extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{backgroundImage: "url("+ HOMEBG +")"}}>
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>All Posts</h1>
                            <span className="subheading">Read all</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <HomePosts />
            </div>
        )
    }
}
