const express = require('express');
const app = express();

const PORT = 3000 ; 

app.get('/',function(req, res){
    res.send('Hello <b>World</b>');
});

app.listen(PORT , function() {
 console.log(`listening on port ${PORT}`);
});