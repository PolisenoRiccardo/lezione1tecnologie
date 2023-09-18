var evento = 0;
function azione() {
    switch (evento) {
        case 0:
            document.getElementById("titolo").style = "visibility: visible;";
            break;
        case 1:
            document.getElementById("titolo").innerHTML = "Titolo cambiato"; 
            break;
        case 2:
            document.body.style = "background-color: rgb(109, 109, 100);";
            break; 
        default:
            alert('Finita qua')  
            break;
    }
    evento += 1;
}

function passoSopra() {
    document.getElementById("squirtle").src = 'https://i.ebayimg.com/images/g/5AsAAOSwfz5iK6Lc/s-l1200.webp';
    
}

function passoVia() {
    document.getElementById("squirtle").src="https://ovrhypd.se/wp-content/uploads/2022/07/POKEMON-SEA-SALT-CHEESE-SPARKLING-WATER-330ml.jpg";
    
}