// Importar Express
const express = require('express');

// App
const app = express();

// Vetor contendo todos os personagens de Ragnarok
let dados = [
    {'classe':'Homunculus', 'nome':'Amistr', 'imagem':'https://www.spriters-resource.com/resources/sheet_icons/123/126324.png?updated=1582642484'},
    {'classe':'Homunculus', 'nome':'Eira', 'imagem':'https://www.spriters-resource.com/resources/sheet_icons/123/126327.png?updated=1582642542'},
    {'classe':'Enemies', 'nome':'Abysmal Knight', 'imagem':'https://www.spriters-resource.com/resources/sheet_icons/123/126280.png?updated=1582640398'}
]

// Rota
app.get('', function(req, res){
    res.status(200).json(dados);
});


app.get('/pesquisa/:termo', function(req, res){
    let termo = req.params.termo.toLowerCase();
    console.log(termo);
    let vetorTemp = dados.filter(obj => { return obj.nome.toLowerCase().indexOf(termo) !== -1;  });

    res.status(200).json(vetorTemp);
});

app.get('/:classe', function(req, res){
    let classe = req.params.classe;

    let vetorTemp = dados.filter(obj => { return obj.classe === classe });

    res.status(200).json(vetorTemp);
});

// Servidor
app.listen(8080);