const app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    MongoClient = require('mongodb').MongoClient,
    DBdriver = require('./db/driver_mongo').MongoDriver,
    URL_MONGO = require('./db/constants').url,
    http = require('http').Server(app),
    passport = null,
    SERVICE_PORT = 3000,
    dirRaiz = __dirname;


MongoClient.connect(URL_MONGO, function (err, database) {
    if (err) throw new Error("Error DB connection");

    let dbDriver = new DBdriver(database);

    //shut down DDBB when closing
    process.on('SIGINT', function () {
        database.close();

        console.log("Exiting...");
        process.exit();

    });

    //middleware
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());


    //Para autentificacion
    //passport = require('./auth/passport_utils')(dbDriver);
    //app.use(passport.initialize());

    //routes
    app.use('/example', require('./routes/example_routes')(dbDriver));

    //static
    app.use(require('express').static(dirRaiz + '/public/static'));


    //start server
    http.listen(SERVICE_PORT, function () {
        console.log('Servidor express escuchando en puerto 3000');
    });

});