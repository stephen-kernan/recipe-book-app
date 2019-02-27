import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientInputs: [1, 2, 3],
            directionInputs: [1, 2, 3]
        }

        this.addIngredient = this.addIngredient.bind(this);
        this.addDirection = this.addDirection.bind(this);
    }


    addIngredient() {
        let newInput = this.state.ingredientInputs.length + 1;
        let newArray = this.state.ingredientInputs;
        newArray.push(newInput);
        this.setState({
            ingredientInputs: newArray
        })
    }

    addDirection() {
        let newInput = this.state.directionInputs.length + 1;
        let newArray = this.state.directionInputs;
        newArray.push(newInput);
        this.setState({
            directionInputs: newArray
        })
    }

    render() {
        return(

            <div className="App">
      
                <div className="Form Fullscreen">
                
                <form id="recipe-form" method="POST" action="/api/recipes">        
                    <label for="title">What is your recipe called?</label>
        
                    <input type="text" name="title" onChange={this.handleChange} placeholder="Recipe Title" className="Small-Input"></input>
        
                    <br />
                    
                    <label for="ingredients">List the ingredients below:</label>
        
                    <ol>
                        {this.state.ingredientInputs.map((input) => {
                            return (
                                <li>
                                    <input type="text" 
                                        key={`ingredient${this.state.ingredientInputs.indexOf(input)}`}
                                        className="Small-Input"
                                        name="ingredients"
                                        placeholder="Ingredient">
                                    </input>
                                </li>
                            )
                        })}
                    </ol>

                    <button type="button" onClick={this.addIngredient}>Add More Ingredients</button>

                    <br />

                    <label for="directions">List the steps for making your recipe:</label>

                    <ol>
                        {this.state.directionInputs.map((input) => {
                            return (
                                <li>
                                    <input type="text" 
                                        key={`direction${this.state.directionInputs.indexOf(input)}`}
                                        className="Small-Input"
                                        name="directions"
                                        placeholder="Step">
                                    </input>
                                </li>
                            )
                        })}
                    </ol>

                    <button type="button" onClick={this.addDirection}>Add More Steps</button>
        
                    <label for="url">If you would like to attach an image to this recipe, paste the link to that image here:</label>
        
                    <input type="text" onChange={this.handleChange} name="url" placeholder="Image URL" className="Small-Input"></input>
        
                    <button type="submit" value="submit">Submit</button>
        
                    <Link to='/recipe-tile.js'><button>Cancel</button></Link>
                </form>
                
                </div>
            </div>
        );
    }

 
};

export default Form;