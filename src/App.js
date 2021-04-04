import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Error } from './pages/Error'
import { Category } from './pages/Category'
import { Recipe } from './components/Recipe'

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/contacts' component={Contacts}></Route>
            <Route path='/category/:name' component={Category}></Route>
            <Route path='/meal/:id' component={Recipe} ></Route>
            <Route component={Error} ></Route>
          </Switch>
        </Router>
      </main>

      <Footer />
    </>
  );
}

export default App;
