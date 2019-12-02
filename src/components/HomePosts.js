import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import Loading from './Loading'

export default class HomePosts extends Component {

    API_PATH = `https://demo.worldwidemyanmar.com/mmh/wp-json/wp/v2/posts`

    state = {
        posts: []
    }

    getData = () => {
        Axios.get(this.API_PATH)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    componentDidMount() {
        this.getData()
    }
    
    render() {
        const posts = this.state.posts

        const postLists = posts.length ? (
            <>
                {
                    posts.map((post) => (
                        <div className="post-preview" key={post.id}>
                            <Link to={`/post/${post.slug}`}>
                                <h2 
                                    className="post-title"
                                    dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                />
                                <h3 
                                    className="post-subtitle"
                                    dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}
                                />
                            </Link>
                            <p className="post-meta">
                                <Moment format="MMMM D, YYYY">
                                    {post.date}
                                </Moment>
                            </p>
                        </div>
                    ))
                }
            </>
        ) : (
            <>
                <Loading />
            </>
        )

        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {postLists}

                        <div className="clearfix">
                        <a className="btn btn-primary float-right" href="!#">Older Posts &rarr;</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
