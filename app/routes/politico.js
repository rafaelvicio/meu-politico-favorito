module.exports = function(app){

  var api = app.api.politico;

  app.route('/api/politicos')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/politicos/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
