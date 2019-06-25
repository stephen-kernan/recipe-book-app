const Joi = require('joi');
const bodyParser = require('body-parser')
const express = require('express');
const multer = require('multer');
var upload = multer();
const app = express();
const cors = require('cors');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(express.json());

const recipes = [
    {
        id: 0,
        title: 'PBJ',
        url:'https://www.hormelfoods.com/wp-content/uploads/Newsroom_20170724_SKIPPY-Peanut-Butter-and-Jelly-Sandwich.jpg',
        ingredients: [null, null],
        directions: [null, null]
    }, 
]

app.get('/api/recipes', (req, res) =>
    res.send(recipes)
);

app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(c => c.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).send('Recipe not found');
    res.send(recipe);
});

app.post('/api/recipes', urlencodedParser, (req, res) => {
    const { error } = validateRecipe(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const recipe = {
        id: recipes.length + 1,
        title: req.body.title,
        url: req.body.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/600px-Question_mark_white_icon.svg.png',
        ingredients: req.body.ingredients,
        directions: req.body.directions
    };

    recipes.push(recipe);
    res.redirect('http://localhost:3000/');
});

app.put('/api/recipes/:id', upload.none(), (req, res) => {
    let recipe = recipes.find(c => c.id === parseInt(req.params.id));

    if (!recipe) return res.status(404).send('Recipe not found');

    recipe.id = parseInt(req.body.id);
    recipe.title = req.body.title;
    recipe.url = req.body.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Question_mark_white_icon.svg/600px-Question_mark_white_icon.svg.png';
    recipe.ingredients = req.body.ingredients;
    recipe.directions =  req.body.directions;

    req.method === "GET";

    res.redirect('http://localhost:3000/');
    res.send(recipe);
})

app.delete('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(c => c.id === parseInt(req.params.id));

    if (!recipe) return res.status(404).send('Recipe not found');

    const index = recipes.indexOf(recipe);
    recipes.splice(index, 1);

    req.method === "GET";

    res.redirect(404, 'http://localhost:3000/');
})

function validateRecipe(recipe) {
    const schema = {
        title: Joi.string().min(2).required(),
        url: Joi.string().allow('', null),
        ingredients: Joi.array().min(1),
        directions: Joi.array().min(1)
    }
    
    return Joi.validate(recipe, schema);
}

//PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on Port ${port}`));