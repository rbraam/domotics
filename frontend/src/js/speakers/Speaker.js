function Speaker (speechSynthesis){
    this.speechSynthesis = speechSynthesis;
}

Speaker.prototype.speak = function (text){
    if ("SpeechSynthesisUtterance" in window){
        var message = new SpeechSynthesisUtterance(text);
        message.lang = "nl-NL";
        this.speechSynthesis.speak(message);
    }else {
        console.log("SpeechSynthesisUtterance not supported");
    }
};

Speaker.prototype.sayHello = function(){
    var d = Date.now();
    var hour = d.getHours();
    var text;
    if (hour >= 0 && hour <= 11){
        text = "Goedemorgen";
    }
    else if (hour >= 12 && hour <= 17){
        text = "Goedemiddag";
    }
    else {
        text = "Goedeavond";
    }
    this.speak(text);
};