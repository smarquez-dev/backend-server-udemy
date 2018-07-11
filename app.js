// * Requires
var express = require('express');
var mongoose = require('mongoose');


// * Inicializar variables
var app = express();

// * Conexión a la base de datos
mongoose.connection.openUri('mongodb://@ds135061.mlab.com:35061/hospital_db', { 
  user: 'sirgaden',
  pass: '18MamonA@20'
  }, (err, res) => {

  if (err) throw err;

  console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online!');

});


// * Rutas
app.get('/', (req, res, next) => {

  res.status(200).json({
    ok: true,
    mensaje: 'Petición realizada correctamente'
  });

});


// * Escuchar peticiones
app.listen(3000, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online!');
});