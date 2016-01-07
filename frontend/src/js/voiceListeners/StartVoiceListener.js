function StartVoiceListener(recognition, speaker) {
    VoiceListener.call(this, recognition, speaker);
    this.registerListeners();
}
StartVoiceListener.prototype = Object.create(VoiceListener.prototype);

StartVoiceListener.prototype.registerListeners = function() {
    var that = this;
    this.addListener("hallo truus", function(){
        that.handleActivate();
    });
};

StartVoiceListener.prototype.handleActivate = function (){
    this.speaker.sayHello();
    this.stop();
};