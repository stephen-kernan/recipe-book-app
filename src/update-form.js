import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.location.state.recipe,
            id: this.props.location.state.recipe.id,
            ingredientsArray: this.props.location.state.recipe.ingredients,
            directionsArray: this.props.location.state.recipe.directions
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.addDirection = this.addDirection.bind(this);
    }

    addIngredient() {
        let ingredientsArray = this.state.ingredientsArray;
        let newIngredient = null;

        ingredientsArray.push(newIngredient);

        this.setState({
            ingredientsArray: ingredientsArray
        })
    }

    addDirection() {
        let directionsArray = this.state.directionsArray;
        let newDirection = null;

        directionsArray.push(newDirection);

        this.setState({
            directionsArray: directionsArray
        })
    }

    handleSubmit() {
        let myForm = document.getElementById("recipe-form");
        let formData = new FormData(myForm);
        formData.append('id', `${this.state.recipe.id}`);

        fetch(`/api/recipes/${this.state.recipe.id}`, {
            method: 'PUT',
            body: formData,
            redirect: "follow"
        })
    }


    render() {
        return(

            <div className="App">
      
                <div className="Form Fullscreen">
                
                <form id="recipe-form" onSubmit={this.handleSubmit}>

                    <h2>What is your recipe called?</h2>
        
                    <input type="text" 
                        defaultValue={this.state.recipe.title} 
                        id='title'
                        name='title'
                        className="Small-Input">
                    </input>
        
                    <br />
                    
                    <h2>List the ingredients below:</h2>

                    <ol>
                        {this.state.recipe.ingredients.map((ingredient) => {
                            return (
                                <li>
                                    <input type="text" 
                                        defaultValue={ingredient}
                                        name="ingredients" 
                                        className="Small-Input">
                                    </input>
                                </li>
                            )
                        })}
                    </ol>
        
                    <button type="button" onClick={this.addIngredient}>Add More Ingredients</button>
        
                    <br />
        
                    <h2>List the steps for making your recipe:</h2>
        
                    <ol>
                        {this.state.recipe.directions.map((direction) => {
                            return (
                                <li>
                                    <input type="text" 
                                        name="directions"
                                        defaultValue={direction} 
                                        className="Small-Input">
                                    </input>
                                </li>
                            )
                        })}
                    </ol>
        
                    <button type="button" onClick={this.addDirection}>Add More Steps</button>
        
                    <h2>If you would like to attach an image to this recipe, paste the link to that image here:</h2>
        
                    <input type="text" 
                        id="url"
                        name="url"
                        defaultValue={this.state.recipe.url} 
                        className="Small-Input">
                    </input>
        
                    <Link to='/recipe-tile.js'><button type="button" onClick={this.handleSubmit}>Submit</button></Link>
        
                    <Link to='/recipe-tile.js'><button>Cancel</button></Link>
                </form>
                
                </div>
            </div>
        );
    }
};

export default UpdateForm;