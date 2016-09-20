function VoiceListener(speechRecognition, speaker, visualChat){
    var that = this;
    this.recognition = speechRecognition;
    this.speaker = speaker;
    this.visualChat = visualChat;
    this.listeners = {};

    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'nl-NL';

    this.started = true;

    this.hearMessage = null;

    this.recognition.onstart = function() {
        that.onStart();
    };

    this.recognition.onresult = function(event) {
        if (typeof(event.results) == 'undefined') {
            this.recognition.stop();
            // upgrade();
            return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            var text = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                if (that.visualChat) {
                    if (that.hearMessage === null){
                        that.hearMessage = that.visualChat.hear(text);
                    }else{
                        that.hearMessage.setText(text);
                    }
                    that.hearMessage = null;
                }
                console.log("final: " + text);
                that.onResult(text);
            } else {
                if (that.visualChat) {
                    if (that.hearMessage === null){
                        that.hearMessage = that.visualChat.hear(text);
                    }else{
                        that.hearMessage.setText(text);
                    }
                }
                console.log("not final: " + text);
            }
        }
    };

    this.recognition.onStop = function(){
        that.onStop();
    };
}

VoiceListener.prototype.start = function (){
    this.recognition.start();
    this.started = true;
};

VoiceListener.prototype.stop = function(){
    this.recognition.stop();
    this.started = false;
};

VoiceListener.prototype.onStart= function() {
    this.recognizing = true;
};

VoiceListener.prototype.onStop = function (){
    this.recognizing = false;
};

VoiceListener.prototype.onResult = function (command){
    if (!this.started){
        return;
    }
    var lowerCaseCommand = command.toLowerCase();
    console.log(lowerCaseCommand);
    if (this.listeners[lowerCaseCommand] !== undefined){
        for (var i =0; i < this.listeners[lowerCaseCommand].length; i ++){
            this.listeners[lowerCaseCommand][i].call();
        }
    }
};
/**
 * Add listener to given command
 * @param command command in text
 * @param handler function that is called when text is received
 */
VoiceListener.prototype.addListener = function(command, handler){
    var lowerCaseCommand = command.toLowerCase();
    if (this.listeners[lowerCaseCommand] === undefined){
        this.listeners[lowerCaseCommand] = [];
    }
    this.listeners[lowerCaseCommand].push(handler);
};


