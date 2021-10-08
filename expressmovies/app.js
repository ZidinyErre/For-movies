const express = require('express');
const app = express();

const PORT = 3000 ; 

app.get('/movies', (req, res) =>{
    res.send('Bientôt des films ici même !');
});

app.get('/movies/add', (req, res) => {
    res.send(`Prochainement un formulaire d\ 'ajout ici`);
});

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    res.send(`film numéro ${id}`);
});


app.get('/', (req, res) => {
    res.send('Hello <b>World !!!!!</b>');
});

app.listen(PORT , () => {
 console.log(`listening on port ${PORT}`);
});