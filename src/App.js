import React from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Cards from './components/Cards'
import Card from './components/Card'
import Fav from './components/Fav'

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/cards" component={Cards}/>
        <Route exact path="/fav" component={Fav}/>
        <Route exact path="/card/:id" component={Card}/>
      </Switch>
    </div>
  )
}

export default App
