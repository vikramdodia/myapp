var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
var userController = require('./controllers/user.controller');
var postController = require('./controllers/post.controller');
var keyboardController = require('./controllers/keyboard.controller');
var alphabetController = require('./controllers/alphabet.controller');

mongoose.connect('mongodb://localhost:27017/demomydb')
.then(()=>{console.log("connected")})
.catch(err => {console.log(err)});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/user', userController.getUser);
app.get('/user/:id', userController.getUserById);
app.post('/user', userController.addUser);
app.delete('/user/:id', userController.deleteUser);
app.put('/user', userController.updateUser);

app.get('/post', postController.getPost);
app.get('/post/:id', postController.getPostById);
app.post('/post', postController.addPost);
app.delete('/post', postController.deletePost);
app.put('/post', postController.updatePost);

app.get('/keyboard', keyboardController.getKeyboard);
app.get('/keyboard/:id', keyboardController.getKeyboardById);
app.post('/keyboard', keyboardController.addKeyboard);
app.delete('/keyboard', keyboardController.deleteKeyboard);
app.put('/keyboard', keyboardController.updateKeyboard);

app.get('/alphabet', alphabetController.getAlphabet);
app.get('/alphabet/:id', alphabetController.getAlphabetById);
app.post('/alphabet', alphabetController.addAlphabet);
app.delete('/alphabet', alphabetController.deleteAlphabet);
app.put('/alphabet', alphabetController.updateAlphabet);

app.listen(3000);