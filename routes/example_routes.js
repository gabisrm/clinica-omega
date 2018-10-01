const express = require('express'),
    sendMail = require('./../config/mail/mail').sendMail,
    router = express.Router();





module.exports = () => {


    router.post('/nuevoMail', (req, res) => {
        // get body function
        console.log(req.body);


        sendMail(req.body.mail, req.body.name,req.body.text, (err, info) =>{
            if(err !== null){
                console.log("ERROR AL ENVIAR EMAIL: ", err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        })
    });

    return router;
};