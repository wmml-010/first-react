import React, { Component } from 'react'
import Moment from 'react-moment'
import Axios from 'axios'
import Loading from './Loading'

export default class PostDetail extends Component {

    state = {
        post: null
    }

    getData = () => {
        const slug = this.props.match.params.slug
        Axios.get(`https://demo.worldwidemyanmar.com/mmh/wp-json/wp/v2/posts?slug=${slug}`)
            .then(res => {
                this.setState({
                    post: res.data[0]
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
            <>
                
                {
                    post ? (
                        <>
                            <header 
                                className="masthead" 
                                style={{
                                    backgroundImage: "url("+ post.better_featured_image.source_url +")"
                                }}
                            >
                                <div className="overlay"></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-10 mx-auto">
                                            <div className="site-heading">
                                                <h1
                                                    dangerouslySetInnerHTML={{__html: post.title.rendered}}
                                                />
                                                <span className="subheading"
                                                    dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}
                                                />
                                                <p className="post-meta">
                                                    <Moment format="MMMM D, YYYY">
                                                        {post.date}
                                                    </Moment>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <article>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-10 mx-auto">
                                            <p
                                                dangerouslySetInnerHTML={{__html: post.content.rendered}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </>
                    ) : (
                        <>
                            <Loading />
                        </>
                     )
                           
                }
                        
            </>
        )
    }
}



