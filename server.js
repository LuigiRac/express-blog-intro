/*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman
*/

// Express, port, app
const express = require('express');
const port = 3000;
const app = express();

//Asset statici
app.use('/img'.express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
});

app.listen(port, () => {
    console.log('server running on http//:localhost:${port}');

})

const posts = [
    {
        titolo: "Ciambellone",
        contenuto: "Ciambellone",
        immagine: "/img/ciambellone.jpeg",
        tags: ["Dolce", "Ricetta"]
    },
    {
        titolo: "Cracker Barbabietola",
        contenuto: "Cracker Barbabietola",
        immagine: "/img/cracker_barbabietola.jpeg",
        tags: ["Cracker", "Ricetta", "Barbabietola"]
    },
    {
        titolo: "Pane Fritto Dolce",
        contenuto: "Pane Fritto Dolce",
        immagine: "/img/pane_fritto_dolce.jpeg",
        tags: ["Pane", "Ricetta", "Dolce"]
    },
    {
        titolo: "Pasta Barbabietola",
        contenuto: "Pasta Barbabietola",
        immagine: "/img/pasta_barbabietola.jpeg",
        tags: ["Pasta", "Ricetta", "Barbabietola"]
    },
    {
        titolo: "Torata Paesana",
        contenuto: "Torta Paesana",
        immagine: "/img/torta_paesana.jpeg",
        tags: ["Torta", "Ricetta", "Dolce"]
    }
];


//creazione rotta Bacheca
app.get('/bacheca', (req, res) => {
    res.json(posts)
});
// app.listen(port, () => {
//     console.log('server running on http//:localhost:${port}');

// })

//Immagini
