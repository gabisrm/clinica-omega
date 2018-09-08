const express = require('express'),
    router = express.Router();


module.exports = () => {

    
    router.get('/prueba2', (req, res) => {
        // get body function
        res.sendStatus(200);
    });

    return router;
};