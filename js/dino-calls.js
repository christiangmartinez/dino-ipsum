DinoGetter = function() {};

DinoGetter.prototype.getDefault = function(displayDinoIpsum) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json')
  .then(function(response) {
    displayDinoIpsum(response);
    console.log(response);
  })
  .fail(function(error) {
    console.log(error);
  });
}

DinoGetter.prototype.getParagraphs = function(numberOfParagraphs, displayNParagraphs) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + numberOfParagraphs)
  .then(function(response) {
    displayNParagraphs(response);
    console.log(response);
  })
  .fail(function(error) {
    console.log(error);
  });
}

DinoGetter.prototype.getNParagraphsofXDinos = function(numberOfParagraphs, numberOfDinos, displayNParagraphsOfXDinos) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=' + numberOfParagraphs + '&words=' + numberOfDinos)
  .then(function(response) {
    displayNParagraphsOfXDinos(response);
    console.log(response);
  })
  .fail(function(error) {
    console.log(error);
  });
}

exports.dinoModule = DinoGetter;
