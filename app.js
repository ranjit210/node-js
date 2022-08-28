const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'chowdhuryranjit321@gmail.com',
        pass: 'ranluvsona@321'
    }
});
const mailOptions = {
    from: 'chowdhurryranjit321@gmail.com',
    to :'chowdhuryranjit816@gmail.com',
    subject :'sending Email using node.',
    text : 'thats way easy'
};
transporter.sendMail(mailOptions,function(error ,info){
    if(error){
        console.log(error)
    }
    else {
        console.log('Email sent :' + info.response)
    }
})