import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Tile from './tile';
import './App.css';

class RecipeBook extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {
        fetch('/api/recipes')
            .then(res => res.json())
            .then(recipes => this.setState({ recipes: recipes }))
    }

    render() {
        return(
            <div className="wrapper">
                {this.state.recipes.map((recipe) => {
                    return <Tile recipe={recipe} key={recipe.id} />
                })}

                <Link to="./form.js">
                    <button className="Recipe-Card Tiny-Card">

                        <h1>+</h1>

                        <h2 className="Recipe-Label">ADD NEW RECIPE</h2>

                    </button>
                </Link>
            </div>        
        )
    }
}



export default RecipeBook;
