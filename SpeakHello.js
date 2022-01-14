(function (window){
  var speakWord = "Hello";
  var helloSpeaker = {};
  speakWord.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  windows.speakWord=speakWord;
})(window);

