(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (n in names) {
    var firstLetter = names[n].toLowerCase().charAt(0);

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[n]);
    } else {
      helloSpeaker.speak(names[n]);
    }
  }
})()