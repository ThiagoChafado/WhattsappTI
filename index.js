const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function(){
    console.log('Started server at port 3000!');
})


app.post('/message',(req,res)=> {
    const user = req.body.body.toLowerCase();
    switch(user){
        case '1':
            res.send('<Response><Message> Hello </Message></Response>')
    }
})



