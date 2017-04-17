var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Politico');

api.adiciona = function(req, res) {

  model
    .create(req.body)
      .then(function(){
        res.json(politico);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

api.atualiza = function(req, res) {

  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then(function(politico) {
        res.json(politico);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

api.lista = function(req, res) {

  model
    .find({})
    .then(function(politicos) {
      res.json(politicos);

    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });

};

api.buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(politico){
        if(!politico) throw Error('Politico não encontrada');
        res.json(partido);

      }, function(error){
        console.log(error);
        res.status(500).json(error);
      });

};

api.removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
      .then(function(){
        res.sendStatus(204);
      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

module.exports = api;
