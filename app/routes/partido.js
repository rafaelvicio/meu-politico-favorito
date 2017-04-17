module.exports = function(app){

  var api = app.api.partido;

  app.route('/api/partidos')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/partidos/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
