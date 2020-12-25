const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
           const user = new User({
               email: req.body.email,
               password: hash
           });
           user.save()
               .then(() => res.status(201).json({message: 'Utilisateur créé ! '}))
               .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({ error }));

};
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then(user => {
            if(!user){
                return res.status(401).json({message: 'Utilisateur non trouver !'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                           return res.status(401).json({message: 'Mot de passe incorrect !'});
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: 'String'
                    });
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}))

};

exports.getAllUser = (req, res, next) =>{
    User.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(404).json({error}));
}