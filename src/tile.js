import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';


class Tile extends Component {

    render() {
        return(        
            <Link to={{
                pathname: "./recipe-card.js",
                state: {recipe: this.props.recipe}
            }}>
                <button className="Recipe-Card Tiny-Card"  >

                    <img className="Recipe-Pic Tiny-Pic" src={this.props.recipe.url}/>

                    <h2 className="Recipe-Label">{this.props.recipe.title}</h2>

                </button>
            </Link>
        )}}

export default Tile;