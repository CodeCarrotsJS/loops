// zad 1
var zad1 = function(){
    var array=[1,2,3,4,5,6,7,8,9,10]
    for (var i=0; i<array.length; i++){
      console.log(array[i])
    };
};

var zad2 = function(){
    for (var i=0; i<=100; i+=2){
      console.log(i)
    }
}

var zad3=function(){
    var array=[1,2,3,4,5,6,7,8,9,10]
    var reverseArray=[]
    for (var i=array.length; i>=0; i--){
        console.log(i);
        reverseArray.push(array[i])
    }
    alert(reverseArray)
}