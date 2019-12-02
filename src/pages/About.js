import React, { Component } from 'react'
import Axios from 'axios'
import Loading from '../components/Loading'

export default class About extends Component {

    state = {
        post: null
    }

    getData = () => {
        Axios.get('https://demo.worldwidemyanmar.com/mmh/wp-json/wp/v2/pages/31')
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
    }

    componentDidMount() {
        this.getData()
        window.scrollTo(0,0)
    }

    render() {
        const post = this.state.post

        return (
            <div>
                {
                    post ? (
                        <>
                            <header className="masthead" style={{backgroundImage: "url("+ post.better_featured_image.source_url +")"}}>
                                <div className="overlay"></div>
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                    <div className="site-heading">
                                        <h1
                                            dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                        />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </header>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 col-md-10 mx-auto">
                                        <p
                                            dangerouslySetInnerHTML={{__html: post.content.rendered}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Loading />
                        </>
                    )
                }
                
            </div>
        )
    }
}
