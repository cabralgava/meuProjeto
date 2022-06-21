const fs = require("fs");

const cinema = "CineHouse";

var catalogo = require("./database/catalogo.json");


//função adicionar filme

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
      catalogo.push({
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: anoDeLancamento,
        emCartaz: emCartaz
    })
}

// função buscar um filme

function buscarFilme(identificador){
    for( var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === identificador){
            console.log(catalogo[i].titulo)
        }
    }
}

// buscarFilme(identificador = 1);


// função alterar status do filme

function alterarFilmeEmCartaz(identificador){
    for( var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo === identificador && catalogo[i].emCartaz == true){
            catalogo[i].emCartaz = false;
        }else{
            catalogo[i].emCartaz = true;
            break
        }
    }
}

alterarFilmeEmCartaz(2);


// adicionarFilme(5, "titulo5", 60, ["eu, você, nos tres"], 2022, true);


// funcção listar todos os filmes 

function listaTodosOsFilmes(){
    for(i = 0; i <= catalogo.length; i++){
        console.log(catalogo[i]);
    }
}

//listaTodosOsFilmes();


// lista de filmes em cartaz *** Estou com erro

function listarFilmesEmCartaz(){
    for(i = 0; i <= catalogo.length; i++){
        if(catalogo[i].emCartaz == true){
            console.log(catalogo[i]);
        }
    }
}

//listarFilmesEmCartaz();






// gravando no arquivo JSON

const json = JSON.stringify(catalogo);
fs.writeFileSync("./database/catalogo.json", json);


console.log(catalogo);
