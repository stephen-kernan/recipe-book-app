import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Form from './form';
import TileScreen from './tile-screen';
import FullRecipe from './recipe-card';
import UpdateForm from './update-form'


class App extends Component {
  render() {

    return(
      <BrowserRouter>
        <div className='App'>
          <header className="App-header">
                <h1>RECIPES</h1>
          </header>
          <Route exact path="/" component={TileScreen} />
          <Route path='/recipe-card.js' component={FullRecipe} />
          <Route path='/recipe-tile.js' component={TileScreen} />
          <Route path='/form.js' component={Form} />
          <Route path='/update.js' component={UpdateForm} />
        </div>
      </BrowserRouter>
    )
  
  
  }

}


export default App;
