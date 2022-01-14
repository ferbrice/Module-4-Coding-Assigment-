(function (window){
  var speakWord = "Hello";
  var helloSpeaker = {};
  speakWord.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.speakWord=speakWord;
})(window);

