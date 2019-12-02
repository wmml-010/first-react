import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Head from './components/Head'
import Footer from './components/Footer'
import About from './pages/About'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import Default from './pages/Default'
import PostDetail from './components/PostDetail'

function App() {
  return (
    <React.Fragment>
      <Head />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:slug" component={PostDetail} />
        <Route path="/about-us" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default App;
