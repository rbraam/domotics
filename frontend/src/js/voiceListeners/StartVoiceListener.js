function StartVoiceListener(recognition, speaker, visualChat) {
    VoiceListener.call(this, recognition, speaker, visualChat);
    this.registerListeners();
}
StartVoiceListener.prototype = Object.create(VoiceListener.prototype);

StartVoiceListener.prototype.registerListeners = function() {
    var that = this;
    this.addListener("hallo", function(){
        that.handleActivate();
    });
};

StartVoiceListener.prototype.handleActivate = function() {
    this.speaker.sayHello();
    //this.stop();
};