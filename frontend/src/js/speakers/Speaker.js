function Speaker(speechSynthesis, visualChat) {
    this.speechSynthesis = speechSynthesis;
    this.visualChat = visualChat;
}

Speaker.prototype.speak = function (text){
    console.log(this.speechSynthesis);
    if (this.visualChat){
        this.visualChat.speak(text);
    }
    if ("SpeechSynthesisUtterance" in window){
        var message = new SpeechSynthesisUtterance(text);
        message.lang = "nl-NL";
        this.speechSynthesis.speak(message);

    }else {
        console.log("SpeechSynthesisUtterance not supported");
    }
};

Speaker.prototype.sayHello = function(){
    var d = new Date(Date.now());
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
