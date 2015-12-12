function VoiceListener(speechRecognition, speaker){
    var that = this;
    this.recognition = speechRecognition;
    this.speaker = speaker;

    this.listeners = {};

    this.initRecognition();
}

VoiceListener.prototype.initRecognition = function (){
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'nl-NL';

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
            if (event.results[i].isFinal) {
                console.log("final: " + event.results[i][0].transcript);
                that.onResult(event.results[i][0].transcript);
            } else {
                console.log("not final: " + event.results[i][0].transcript);
            }
        }
    };

    this.recognition.onStop = function(){
        that.onStop();
    };
};

VoiceListener.prototype.start = function (){
    this.recognition.start();
};

VoiceListener.prototype.onStart= function() {
    this.recognizing = true;
};

VoiceListener.prototype.onStop = function (){
    this.recognizing = false;
};

VoiceListener.prototype.onResult = function (command){
    if (this.listeners[command] !== undefined){
        for (var i =0; i < this.listeners[command].length; i ++){
            this.listeners[command][i].call();
        }
    }
};
/**
 * Add listener to given command
 * @param command command in text
 * @param handler function that is called when text is received
 */
VoiceListener.prototype.addListener = function(command, handler){
    if (this.listeners[command] === undefined){
        this.listeners[command] = [];
    }
    this.listeners[command].push(handler);
};


