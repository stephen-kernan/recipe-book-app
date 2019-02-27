import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FullRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.location.state.recipe,
        }

        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.check = this.check.bind(this);
    }

    deleteRecipe() {
        fetch(`/api/recipes/${this.state.recipe.id}`, {
            method: 'DELETE', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: this.state.recipe.id}),
            redirect: "follow"
        })
    }

    check() {
        console.log(this.state.recipe)
    }
    render() {
        return(
            <div className="App">

                <div className="Recipe-Card Fullscreen">

                <h2 className="Recipe-Name">
                    {this.state.recipe.title}
                </h2>
    
                <img src={this.state.recipe.url} 
                class="Recipe-Pic Big-Pic"/>
    
                <h3>Ingredients:</h3>

                <ol>
                    {this.state.recipe.ingredients.map((ingredient) => {
                        return <li>{ingredient}</li>
                    })}
                </ol>
    
                <h3>Directions:</h3>
                
                <ol>
                    {this.state.recipe.directions.map((direction) => {
                        return <li>{direction}</li>
                    })}
                </ol>
    
                <Link to= {{pathname: "./update.js", state: {recipe: this.state.recipe}}}><button value="edit">Edit</button></Link>
                <Link to="/"><button type="button" onClick={this.deleteRecipe}>Delete</button></Link>
                <Link to="./recipe-tile.js"><button value="back">Back</button></Link>
            </div>
        </div>
        )
    }
}

export default FullRecipe;