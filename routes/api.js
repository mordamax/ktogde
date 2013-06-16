var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ktogde");

var placeSchema = mongoose.Schema({
    title: 'string',
    location: {
        name: 'string',
        latitude: 'number',
        longitude: 'number'
    }
})
var Place = mongoose.model("Place", placeSchema);

/*
*
* GET
* All places
* */

exports.getAllPlaces = function(req, res){
    Place.find({}, function(e, places){
        res.json({
            payload: places
        })
    })
}

exports.getOnePlace = function(req, res){
    Place.find({_id: req.params.id}, function(e, place){
        res.json({
           payload: place
        })
    })
}