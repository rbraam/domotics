function VoiceListener(){
    var that = this;
    //this.recognizing = false;
    this.recognition = new webkitSpeechRecognition();
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
    }
}

VoiceListener.prototype.start = function (){
    this.recognition.start()
}

VoiceListener.prototype.onStart= function() {
    this.recognizing = true;
};

VoiceListener.prototype.onStop = function (){
    this.recognizing = false;
}

VoiceListener.prototype.onResult = function (result){
    var msg = new SpeechSynthesisUtterance();
}


