/* Gotowy projekt - sprzawdź działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {

  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod
  // wersja 1 - instrukcja if
  // wersja 2 - instrukcja switch
  let klawisz;
  if(e.keyCode == 38 && red < 255){
    klawisz = "x";
    console.log('góra')
  }else if (e.keyCode == 40 && red > 0){
    klawisz = "y";
    console.log('dół');
  }
  
  switch (klawisz){
    case "x":
     red = red + 5
     green = green + 5
     blue = blue + 5
    break;
    case "y":
     red = red - 5
     green = green - 5
     blue = blue - 5
    break;
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}

window.addEventListener('keydown', changeColor)