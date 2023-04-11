var filmsJSON = [{
    titolo: "Dune",
    regista: "Villeneuve",
    attori: [
        "Timothée Chalamet ",
        " Rebecca Ferguson ",
        " Zendaya"
    ],
    durata: 155,
    poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    trama: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
},

{
    titolo: "The Matrix",
    regista: "Wachowski sisters",
    attori: [
        "Keanu Reeves ",
        " Laurence Fishburne ",
        " Carrie-Anne Moss"
    ],
    durata: 170,
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    trama: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
},

{
    titolo: "Blade Runner",
    regista: "Ridley Scott",
    attori: [
        "Harrison Ford ",
        " Rocco Papaleo ",
        " Ruthger Hauer ",
        " Roberto da Crema"
    ],
    durata: 200,
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    trama: "questo film (versione italiana dell'omonimo americano) intreccia inseguimeti e indagini mozzafiato a televendite e cinepanettoni"
}
]

let indice = 0;

let titolo = document.querySelector("#titolo");
let regista = document.querySelector("#regista");
let attori = document.querySelector("#attori");
let durata = document.querySelector("#durata");
let locandina = document.querySelector("#locandina");
let trama = document.querySelector("#trama");
let btnAvanti = document.querySelector("#btnAvanti");
let btnIndietro = document.querySelector("#btnIndietro")
let btnTrama = document.querySelector("#btnTrama");

mostraFilm(0);

function mostraFilm(indice) {
    titolo.innerHTML = filmsJSON[indice].titolo;
    regista.innerHTML = filmsJSON[indice].regista;
    creaNuovoLi();
    durata.innerHTML = filmsJSON[indice].durata + " min.";
    locandina.src = filmsJSON[indice].poster;
    trama.innerHTML = filmsJSON[indice].trama;
}

function creaNuovoLi() {

    attori.innerHTML = " ";

    for(var i= 0; i<filmsJSON[indice].attori.length; i++){
        
        var nuovoLi = document.createElement("li");
        nuovoLi.textContent = filmsJSON[indice].attori[i];

        let a= document.createElement("a")
        a.setAttribute("href", "https://it.wikipedia.org/wiki/"+ filmsJSON[indice].attori[i]);
               
        attori.appendChild(a).appendChild(nuovoLi);
    }
}

function avanti() {
    
    mostraFilm(indice);
    indice++;
    
    if (indice == filmsJSON.length) {
        indice = 0;
    }
    
};

btnAvanti.addEventListener("click", avanti);

function indietro() {
   
    indice--;
    
    if (indice < 0) {
        indice = filmsJSON.length - 1;
    }  

    mostraFilm(indice);
};

btnIndietro.addEventListener("click", indietro);

function leggiTrama() {

    if (trama.style.display === "none") {
        trama.style.display = "block";
    } else {
        trama.style.display = "none";
    }
   
    console.log("index trama: " + indice);
}

btnTrama.addEventListener("click", leggiTrama);