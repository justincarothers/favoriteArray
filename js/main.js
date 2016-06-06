var favoriteArray = [];
var nextArray = [];

var textInput = document.getElementById("textInput1");
var textInput = document.getElementById("textInput2");
var textInput = document.getElementById("textInput3");
var textInput = document.getElementById("textInput4");




document.getElementById("buttonSubmit").onclick=function() {


  var first = favoriteArray.push(textInput1.value);
  var second = favoriteArray.push(textInput2.value);
  var third = favoriteArray.push(textInput3.value);
  var fourth = favoriteArray.push(textInput4.value);


  document.getElementById("textArea").innerHTML = favoriteArray;

}

  document.getElementById("arrayTwo").onclick=function() {

  var newArray = [favoriteArray[1], favoriteArray[2], favoriteArray[0]];
  alert(newArray);

}

document.getElementById("arrayThree").onclick=function() {

  nextArray.push(favoriteArray[0],favoriteArray[1],favoriteArray[2],favoriteArray[3]);


}

document.getElementById("makeList").onclick=function() {

  document.getElementById("newText").innerHTML =  "<li>" + nextArray[0] + "</li><li>" + nextArray[1] + "</li><li>" + nextArray[2] + "</li><li>" + nextArray[3] + "</li>";


}
