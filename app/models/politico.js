var mongoose = require('mongoose');

var schema = mongoose.Schema({

  nome: {
    type: String,
    required: true
  },
  apelido: {
    type: String,
    required: true
  },
  partido: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    required: true
  },
  noticias: [
    {
      titulo: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      }
    }
  ]

});

mongoose.model('Politico', schema);
