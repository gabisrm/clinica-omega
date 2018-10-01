var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'omegaclinicadental@gmail.com',
        pass: 'palmademallorca'
    }
});

function sendMail(to, name, text, cb) {
    const mailOptions =  {
        from: 'no-reply@clinicadentalomega.com', // sender address
        to: 'omegaclinicadental@gmail.com', // list of receivers
        subject: 'Nueva consulta a través de Web', // Subject line
        html: `<p>Buenas,</p>
        <p> Se ha recibido la siguiente consulta a través de la web:</p>
        <hr>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${to}</p>
        <p><strong>Petición:</strong></p>
        <p>${text}</p>`// plain text body
    }
    

    transporter.sendMail(mailOptions, function (err, info) {
        if (err){
            console.log(err);
            cb(err, null);
        }
        else{
            console.log("IEN; ", info);
            cb(null, info);
        }
            
        
    });

};



module.exports = {
    sendMail: sendMail
}