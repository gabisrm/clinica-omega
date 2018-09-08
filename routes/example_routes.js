const express = require('express'),
    router = express.Router();


module.exports = (dbDriver) => {

    router.post('/prueba', (req, res) => {
        // post body function
        res.sendStatus(200);
    });

    router.get('/prueba2', (req, res) => {
        // get body function
        res.sendStatus(200);
    });

    /*
      More routes  ....
    */

    return router;
};