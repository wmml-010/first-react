import React, { Component } from 'react'
import Header from '../components/Header'
import HomePosts from '../components/HomePosts'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <HomePosts />
            </React.Fragment>
        )
    }
}
