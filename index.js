const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose'),
    User = require('./model_user');

// User test pour comparer les mots de passe
var user1 = new User({
    nom:"bbbb",
    prenom:"cccc",
    email:"dddd",
    password:"eeee"
});
var users =[user1];

// Connection a mongoDB
var connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
app.use(express.json())
app.use(bodyParser.json());

// Affichage test
app.get('/users', (req,res) => {
    res.send(users)
});
// Ajout d'un nouvelle utilisateur à la liste users si non existant sinon comparasion des mots de passe
app.post('/users', function (req, res) {
    var donneeUser = req.body;
    //partie mot de passe
    /*testUser.save(function (err) {
        if (err) throw err;
        User.findOne({email: testUser.email}, function (err, user) {
            if (err) throw err;
            user.comparePassword(testUser.password, function (err, isMatch) {
                if (err) throw err;
                return res.send("mot de pase bon")
            });
        })
        */
    var newUser = new User({
        nom:donneeUser.nom,
        prenom:donneeUser.prenom,
        email:donneeUser.email,
        password:donneeUser.password
    })
    users.push(newUser);
    return res.send("l'utilisateur ".concat(newUser.nom).concat(" a été ajouté "));
});


app.listen(3000, () => {
    console.log('Serveur connecté au port 3000')
})

