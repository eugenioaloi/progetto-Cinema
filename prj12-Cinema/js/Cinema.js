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
let btnLogin = document.querySelector("#btnLogin");
let divLog = document.querySelector('#divLogin');

mostraFilm(0);

function mostraFilm(indice) {
    titolo.innerHTML = "Titolo del film: "+filmsJSON[indice].titolo;
    regista.innerHTML = "Regista: "+filmsJSON[indice].regista;
    creaNuovoLi();
    durata.innerHTML = "Durata: "+filmsJSON[indice].durata + " min.";
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
    
    indice++;
    mostraFilm(indice);
    
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
}
btnTrama.addEventListener("click", leggiTrama);

let btnCompra = document.querySelector("#compraFilm");

function disattivaBtnCompra(){
    btnCompra.disabled=true;
}

disattivaBtnCompra()

//Faccio il login con qualsiasi username e psw. 
function doLogin(){
    let userName = document.querySelector("#username").value;
    let psw = document.querySelector("#psw").value;
    let salutaUser = document.querySelector("#salutaUser");
    
    localStorage.setItem("User loggato: ", userName);
    localStorage.setItem("Psw utilizzata: ", psw);
    
    //Controllo solo se i campi sono stati compilati
    var flagUs = userName =="" || userName ===null;
    var flagPsW = psw =="" || psw ==null;
    
    if(flagUs){
        alert("Per favore compila il campo user correttamente");
    }else if(flagPsW){
        alert("Per favore compila il campo password correttamente");
    }else{//Saluto l'utente appena loggato
        salutaUser.innerHTML = "Ciao " + userName + ", benvenuto nel portale cinema";
        btnCompra.disabled = false;
    }
}
btnLogin.addEventListener("click", doLogin);

let filmArr = [];

//compra il film, ovvero salvalo nella session storage
function compra(){
    let index = indice;
    let title = filmsJSON[index].titolo;
        
    for(i=0;i<filmArr.length+1;i++){
        if(!filmArr.includes(title)){
            filmArr.push(title);

            //Quando l'utente clicca su compra verrà registrato il titolo nlla localstorage 
            localStorage.setItem("Film comprati: ", filmArr);
            
            //viene poi mostrato il titolo del film comprato dentro un div
            divLog.innerHTML = "<h3> Film comprati <h3>" + "<p> " + filmArr + "<p>";
        }
    }
}
btnCompra.addEventListener("click", compra);


