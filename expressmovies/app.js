const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000 ; 

app.use( express.static(__dirname+"public"));
app.use(bodyParser.urlencoded({ extended : false}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.post('/movies',(req,res) => {
    console.log(req.body);
    res.sendStatus(201);
})

app.get('/movies', (req, res) =>{
    // res.send('Bientôt des films ici même !');
    res.render('movies');

});

app.get('/movie-details', (req, res) => {
    res.render('movie-details');
})

app.get('/movies/add', (req, res) => {
    res.send(`Prochainement un formulaire d\ 'ajout ici`);
});

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    // res.send(`film numéro ${id}`);
    res.render('movie-details', {movieid : id });
});


app.get('/', (req, res) => { 
    // res.send('Hello <b>World !!!!!</b>');
    res.render('index');
});

app.listen(PORT , () => {
 console.log(`listening on port ${PORT}`);
});