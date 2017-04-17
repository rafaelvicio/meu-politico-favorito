var mongoose = require('mongoose');

var schema = mongoose.Schema({

  nome: {
    type: String,
    required: true
  },
  sigla: {
    type: String,
    required: true
  },
  presidente: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  cep: {
    type: Number,
    required: true
  },
  web: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true
  },
  email: [String],
  telefone: [Number],

});

mongoose.model('Partido', schema);
