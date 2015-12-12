function IdleVoiceListener(recognition, speaker){
    VoiceListener.call(this, recognition, speaker);
    registerListeners();
}
IdleVoiceListener.prototype = new VoiceListener();

IdleVoiceListener.prototype.registerListeners = function() {
    this.addListener("hallo truus", this.handleActivate);
};

IdleVoiceListener.prototype.handleActivate = function (){
    this.speaker.sayHello();
    this.stop();
};