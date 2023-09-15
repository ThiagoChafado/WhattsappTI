const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const twilio = require('twilio');

app.use(bodyParser.urlencoded({ extended: true }));

const options = [
    'rock', 'paper', 'scissors'
];

const perde = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
}

app.post('/', (req, res) => {
    console.log('new message', req.body.Body);
    const user = req.body.Body.toLowerCase();
    switch(user) {
        case 'rock':
        case 'paper': 
        case 'scissors':
            //computer choice ramdonly
            const computer = options[Math.floor(Math.random() * options.length)];

            if (computer === user) {
                res.send('<Response><Message>Draw!</Message></Response>')
            } else {
                if (perde[computer] === user) {
                    // computer lost
                    res.send(`<Response><Message>I choose *${computer}*</Message><Message>You won</Message></Response>`);
                } else {
                    // computer won
                    const twiml = new twilio.twiml.MessagingResponse();
                    twiml.message(`I choose *${computer}*`);
                    twiml.message('I won!!')
                        .media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');
                    res.send(twiml.toString());
                }
            }

            break;

        default:
            res.send('<Response><Message>Choose between paper,rocks or scissors!</Message></Response>')
            break;
    }
    

});

app.listen(3000, function(){
    console.log('Server active at port 3000!');
})