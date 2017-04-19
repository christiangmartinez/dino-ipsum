var Dino = require('./../js/dino-calls.js').dinoModule;

var displayDinoIpsum = function(responseText) {
  $('.showDinoIpsum').text(responseText);
}

var displayNParagraphs = function(responseText) {
  $('.showDinoIpsum').text(responseText);
}

var displayNParagraphsOfXDinos = function(responseText) {
  $('.showDinoIpsum').text(responseText);
}

$(document).ready(function() {
  var dinoIpsumObject = new DinoGetter();
  $('#getDinoText').click(function() {
    dinoIpsumObject.getDefault(displayDinoIpsum);
  });
  $('#paragraphsRequested').click(function() {
    var numberOfParagraphs = $('#paragraphs').val();
    dinoIpsumObject.getParagraphs(numberOfParagraphs, displayNParagraphs);
  });
  $('#paragraphsAndDinosRequested').click(function() {
    var numberOfParagraphs = $('#paragraphs2').val();
    var numberOfDinos = $('#noOfDinos').val();
    dinoIpsumObject.getNParagraphsofXDinos(numberOfParagraphs, numberOfDinos, displayNParagraphsOfXDinos);
  });
});
