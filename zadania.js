// Stwórz tablicę złożoną z 10 elementów i wyświetl je w konsoli po kolei
var show = function(){
    var array=[1,2,3,4,5,6,7,8,9,10]
    for (var i=0; i<array.length; i++){
      console.log(array[i])
    };
}
// Wyświetl w konsoli liczby parzyste od 0 do 100
var even = function () {
    for (var i=0; i<=100; i+=2){
      console.log(i)
    }
}
// Wyświetl w konsoli liczby od 100 do 1
var hundred = function(){
    for (var i=100; i>0; i--){
        console.log(i)
    }
}
// * Stwórz tablicę, a następnie przy pomocą pętli stwórz tablicę zawierającą te same elementy w odwrotnej kolejności. Wyświetl je w alercie. 
var reverseArray = function(){
    var array=[1,2,3,4,5,6,7,8,9,10]
    var reverseArray=[]
    for (var i=array.length-1; i>=0; i--){
        console.log(i);
        reverseArray.push(array[i])
    }
    alert(reverseArray)
}
// ** Za pomocą pętli policz silnię z dowolnej, podanej liczby 
var factorial = function(number){
    var result = 1;
    for (var i=1; i<=number; i++){
        result = result*i
    }
    console.log(result)
}

// Stwórz obiekt i wyświetl na stronie wszystkie jego elementy w formacie: "(klucz) wynosi (wartość)". Funkcji nie wywołuj w konsoli
var showObject = function(){

}

// stwórz tablicę zawierającą 3 obiekty. Wyświetl na stronie wszystkie elementy wszystkich obiektów, zaznaczając którego obiektu elementy są wyświetlone. Funkcji nie wywołuj w konsoli
var showObjectArray = function(){

}
// Stwórz tablicę złożoną z 10 kolejnych wielokrotności liczby 5 za pomocą pętli while
var multipleOf5 = function(){

}
// Wyświetl w konsoli liczby parzyste od 0 do 100 za pomocą pętli while
var oddNumbers = function(){

}
// * Pobieraj od użytkownika liczby tak długo, aż wpiszę liczbę większą niż 50. Wtedy wyświetl tablicę złożoną z wpisanych dotychczas liczb na stronie
var arrayLessThen50 = function(){

}
// Wypisz na stronie elementy poniższej tablicy do elementu "stop" włącznie.
// var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to']
var stopArray = function(){

}
// Pobieraj od użytkownika liczby tak długo, aż wpiszę liczbę większą niż 50. Wtedy wyświetl tablicę złożoną z wpisanych dotychczas liczb na stronie z ostatnią włącznie
var including50 = function(){

}
// Poproś użytkownika o wpisanie imienia i godziny. W alercie wyświetl użytkownikowi powitanie wraz z imieniem. Jeśli godzina wpisana przez użytkownika jest od 6 do 12, powitanie powinno brzmieć "dzień dobry", od 12 do 18 "Jak mija dzień?", od 18 do północy "Dobry wieczór", a od północy do 6 "idź spać!!!"
var nameAndHour = function(){
  
}


