const app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    http = require('http').Server(app),
    compression = require('compression'),
    SERVICE_PORT = 3000,
    dirRaiz = __dirname;



//middleware
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//Para autentificacion
//passport = require('./auth/passport_utils')(dbDriver);
//app.use(passport.initialize());

//routes
app.use('/', require('./routes/example_routes')());

//static
app.use(require('express').static(dirRaiz + '/public/static'));


//start server
http.listen(SERVICE_PORT, '0.0.0.0', function () {
    console.log('Servidor express escuchando en puerto 3000');
});
