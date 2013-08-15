var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/wtf");

var termSchema = mongoose.Schema({
    title: 'string',
    description: "string",
    published: 'boolean'
})
var Term = mongoose.model("Term", termSchema);

/*
*
* GET
* All terms
* */

exports.getAllTerms = function(req, res){
    Term.find({ published: req.query.published }, function(e, terms){
        res.json({
            payload: terms
        })
    })
}

exports.getOneTerm = function(req, res){
    Term.find({_id: req.params.id}, function(e, term){
        res.json({
           payload: term
        })
    })
}

exports.createTerm = function(req, res){
    var newTerm = req.body;
        newTerm.published = false;

    Term.create(req.body, function(e, term){
        res.json({
           payload: term
        })
    })
}

exports.updateTerm = function(req, res){
    Term.find({_id: req.params.id}, function(e, term){
        term.update(req.body, function(e, updatedTerm){
            res.json({
                payload: updatedTerm
            })
        })
    })
}

exports.env = function(req, res){
    res.json(process.env);
}

