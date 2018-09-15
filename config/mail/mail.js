var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gabireq.91@gmail.com',
        pass: 'Gabird1!'
    }
});

function sendMail(to, name, subject, text, cb) {
    const mailOptions =  {
        from: 'gabireq.91@gmail.com', // sender address
        to: 'gabireq.91@gmail.com', // list of receivers
        subject: 'Nueva consulta a través de Web', // Subject line
        html: `<p>Buenas,</p>
        <p> Se ha recibido la siguiente consulta a través de la web:</p>
        <hr>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${to}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Petición:</strong></p>
        <p>${text}</p>`// plain text body
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err){
            console.log(err);
            cb(err, null);
        }
        else{
            console.log(info);
            cb(null, info);
        }
            
        
    });

};



module.exports = {
    sendMail: sendMail
}