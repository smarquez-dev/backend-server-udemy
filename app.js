// * Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// * Inicializar variables
var app = express();

// * Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// * Server index config

// * Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');
var loginRoutes = require('./routes/login');

// * Conexión a la base de datos
mongoose.connection.openUri('mongodb://@ds135061.mlab.com:35061/hospital_db', { 
  user: 'sirgaden',
  pass: '18MamonA@20'
  }, (err, res) => {

  if (err) throw err;

  console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online!');

});


// * Rutas
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/imagenes', imagenesRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


// * Escuchar peticiones
app.listen(3000, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online!');
});