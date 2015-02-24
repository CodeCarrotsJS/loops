// Stwórz ręcznie tablicę złożoną z 10 imion i wyświetl je w konsoli w formacie: "Pod indeksem (indeks) znajduje się imię (imię)".
// użyj do tego pętli for.
var names = function() {
  var names = ['Ania', 'Kasia', 'Basia', 'Gosia', 'Asia', 'Zosia', 'Ida', 'Aga', 'Iga', 'Ada'];
  for (var i = 0; i<names.length; i++){
    console.log("Pod indeksem "+ i + " znajduje się imię " + names[i]);
  }
}

// Stwórz ręcznie tablicę złożoną z 10 imion i wyświetl je w konsoli w formacie: "Pod indeksem (indeks) znajduje się imię (imię)".
// użyj do tego pętli while.
var names2 = function(){
  var names = ['Ania', 'Kasia', 'Basia', 'Gosia', 'Asia', 'Zosia', 'Ida', 'Aga', 'Iga', 'Ada'];
  var i = 0
  while (i<names.length) {
    console.log("Pod indeksem "+ i + " znajduje się imię " + names[i]);
    i++;
  }

}

// za pomocą pętli for wyświetl liczby od 28 do 63
var numbers = function(){
  for (var i = 28; i<64; i++){
    console.log(i);
  }
}

// za pomocą pętli while wyświetl liczby od 63 do 98
var numbers2 = function(){
  var i = 63;
  while (i<99) {
    console.log(i);
    i++;
  }

}

// Stwórz ręcznie tablicę złożoną z 10 imion i za pomocą pętli for wyświetl co drugi element wraz z jego indeksem
var secondName = function(){
  var names = ['Ania', 'Kasia', 'Basia', 'Gosia', 'Asia', 'Zosia', 'Ida', 'Aga', 'Iga', 'Ada'];
  for (var i = 0; i<names.length; i+=2){
      console.log("Pod indeksem "+ i + " znajduje się imię " + names[i]);
  }
}

// Stwórz ręcznie tablicę złożoną z 10 imion i za pomocą pętli while wyświetl co drugi element wraz z jego indeksem
var secondName2 = function(){
  var names = ['Ania', 'Kasia', 'Basia', 'Gosia', 'Asia', 'Zosia', 'Ida', 'Aga', 'Iga', 'Ada'];
  var i = 0
  while (i<names.length) {
    console.log("Pod indeksem "+ i + " znajduje się imię " + names[i]);
    i+=2;
  }

}
// stwórz obiekt i wyświetl wszystkie jego klucze z wartościami
var object = function(){
  var ja = {wzrost: 174, wiek: 27}
  for (var key in ja){
    console.log("wartość: "+ key+ " to "+ja[key])
  }
}

// Pobieraj od użytkownika liczby tak długo, aż wpisze "stop". Wtedy wyświetl tablicę złożoną z wpisanych dotychczas liczb na stronie, użyj pętli while
var stop = function(){
  var array = [];
  var user = prompt("podaj liczbę lub stop");
  
  while (user != 'stop'){
    array.push(parseInt(user));
    user = prompt("podaj liczbę lub stop");
  }
  console.log(array)
}
// Pobieraj od użytkownika liczby tak długo, aż wpisze "stop". Wtedy wyświetl tablicę złożoną z wpisanych dotychczas liczb na stronie, użyj pętli do...while
var stop2 = function(){
  var array = [];
  var user = prompt("podaj liczbę lub stop");
  
  do {
    array.push(parseInt(user));
    user = prompt("podaj liczbę lub stop");
  } while (user != 'stop');
  console.log(array)

}
// Napisz switch, który w zależności od podanego paramentru pokaże inny napis. Użyj "default" i przynajmnniej 4 casów. 
var condition = function (){
  var film = "Birdman";
  switch (film){
    case ("Ida"):
      console.log("I tak był Oscar");
      break;
    case ("Snajper"):
      console.log('Nie w tym roku, Clint');
      break;
    case ('Grand Budapest Hotel'):
      console.log("I tak 4 Oscary!!");
      break;
    case ('Birdman'):
      console.log('Gratulacje');
      break;
    default: 
      console.log('Dużo się kręci, nie znam wszystkich filmów');
  }
  
}