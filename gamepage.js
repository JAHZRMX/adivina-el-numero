// valor aleatorio generado
  var y = Math.floor(Math.random() * 10 + 1);
// contar el número de intentos
// crear para el intento correcto
var x = document.getElementById("guessField").value;
  if (x == y){
    alert("¡¡¡FELICIDADES!!!" +playername+"LO ADIVINASTE BIEN" + guess + "INTENTO");
    guess= 1;
  }
else if (x > y)
{
    guess++;
    alert("¡OOOPS LO SIENTO!, INTENTA UN NUMERO MAS PEQUEÑO");
}
else{
    guess++;
    alert("¡OOOPS LO SIENTO!, INTENTA UN NUMERO MAS GRANDE");
}
// función para el número adivinado por el usuario     
function playAgain(){
    y = Math.floor(Math.random()* 10 + 1)
}