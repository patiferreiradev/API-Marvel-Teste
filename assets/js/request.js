function getCharacterList() {
    
    const urlAPI = "https://gateway.marvel.com/v1/public/characters?ts=1628811586&apikey=9699e1dc8ee871f26165fc01ded68f70&hash=7095bb566b25c46d2d755379e3470f4b&limit=40";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getImages(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();
}


function showHistorys(elemento) {

    const codigo = elemento.getElementsByClassName("cod-hero")[0].textContent;//codigo do personagem

    console.log(codigo);

    const urlAPI = "https://gateway.marvel.com/v1/public/characters/"+codigo+"?ts=1628811586&apikey=9699e1dc8ee871f26165fc01ded68f70&hash=7095bb566b25c46d2d755379e3470f4b&limit=100";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistorys(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();
}
