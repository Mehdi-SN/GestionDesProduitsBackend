const Product = require('../models/Product');

exports.createThing = (req, res, next) => {
    let thingObject =req.body._id;
    delete thingObject;
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(() => res.status(201).json( { message: 'Bien enregistré !'}    ))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
    Product.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({message: 'Modified!' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
    Product.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Deleted!'}))
        .catch(error => res.status(400).json({ error }));
};
exports.getOneThing = (req, res, next) => {
    Product.findOne({ _id: req.params.id})
        .then(product => res.status(200).json(product))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllThing = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({ error }));

};

