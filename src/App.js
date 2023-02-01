import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'

import Contact from './components/Contact'
import NotFound from './components/NotFound'

import BlogsList from './components/BlogList'

import BlogItemDetails from './components/BlogItemDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={BlogsList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/blogs/:id" component={BlogItemDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

export default App
