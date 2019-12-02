import React, { Component } from 'react'
import Axios from 'axios'
import Loading from '../components/Loading'

const FORM_API_PATH = '/api/form.php'

export default class Contact extends Component {

    state = {
        post: null,
        name: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        Axios({
            method: 'post',
            url: `${FORM_API_PATH}`,
            headers: { 'content-type' : 'application/json' },
            data: this.state
        })
        .then(result => {
            this.setState({
                mailSent: result.data.sent
            })
        })
        .catch(error => this.setState({ error: error.message }))
    }

    getData = () => {
        Axios.get('https://demo.worldwidemyanmar.com/mmh/wp-json/wp/v2/pages/34')
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                        <p
                                            dangerouslySetInnerHTML={{__html: post.content.rendered}}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-8 col-md-10 mx-auto">
                                        <form
                                            action="#"
                                            className=""
                                        >
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    id="name" 
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={e => this.setState({ name: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    id="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea 
                                                    type="text" 
                                                    rows="7"
                                                    className="form-control" 
                                                    id="message" 
                                                    name="message"
                                                    value={this.state.message}
                                                    onChange={e => this.setState({ message: e.target.value })}
                                                />
                                            </div>
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary"
                                                onClick={e => this.handleFormSubmit(e)}
                                            >Send</button> &nbsp;
                                            <button 
                                                type="button" 
                                                className="btn btn-primary"
                                                onClick={this.resetForm}
                                            >Reset</button>

                                            {
                                                this.state.mailSent &&
                                                <p>Send successfully.</p>
                                            }

                                            {
                                                this.state.error &&
                                                <div
                                                    className="position-fixed"
                                                    style={{
                                                        left: '0',
                                                        top: '0',
                                                        right: '0',
                                                        bottom: '0',
                                                        background: '#000',
                                                        zIndex: '999999'
                                                    }}
                                                >
                                                    <div 
                                                        className="col-12 col-lg-8 mx-auto h-100"
                                                    >
                                                        <div
                                                            className="d-table h-100 py-5"
                                                        >
                                                            <button 
                                                                type="button"
                                                                onClick={this.resetForm}
                                                            >Close</button>
                                                            <div
                                                                className="d-table-cell align-middle"
                                                            >
                                                                <h2>Erro to send</h2>
                                                                <p>Please try again.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </form>
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
