function Speaker (speechSynthesis){
    this.speechSynthesis = speechSynthesis;
}

Speaker.prototype.speak = function (text){
    var message = new SpeechSynthesisUtterance(text);
    message.lang = "nl-NL";
    this.speechSynthesis.speak(message);
};

Speaker.prototype.sayHello = function(){
    var d = new Date();
    var hour = d.getHours();
    var text;
    if (hour >= 0 && hour <= 11){
        text = "Goedenmorgen";
    }
    else if (hour >= 12 && hour <= 17){
        text = "Goedenmiddag";
    }
    else {
        text = "Goedenavond";
    }
    this.speak(text);
}