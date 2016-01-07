describe("VoiceListener Spec test", function() {

    var recognition;
    var voiceListener;
    beforeEach(function() {
        recognition = jasmine.createSpyObj('recognition', ['start', 'stop']);
        voiceListener = new VoiceListener(recognition);
    });

    it("Added listeners are called correctly", function() {
        var listenerObj = jasmine.createSpyObj('listenerObj', ['listener1', 'listener2', 'listener3']);
        voiceListener.addListener("Test command",listenerObj.listener1);
        voiceListener.addListener("Test command",listenerObj.listener2);
        voiceListener.addListener("Test command2",listenerObj.listener3);

        voiceListener.onResult("Test command");
        expect(listenerObj.listener1).toHaveBeenCalled();
        expect(listenerObj.listener2).toHaveBeenCalled();
        expect(listenerObj.listener3).not.toHaveBeenCalled();
    });

    it("Added listeners are not called after stop", function() {
        var listenerObj = jasmine.createSpyObj('listenerObj', ['listener1', 'listener2']);
        voiceListener.addListener("Test command",listenerObj.listener1);
        voiceListener.addListener("Test command",listenerObj.listener2);

        voiceListener.stop();
        voiceListener.onResult("Test command");
        expect(listenerObj.listener1).not.toHaveBeenCalled();
        expect(listenerObj.listener2).not.toHaveBeenCalled();

        voiceListener.start();
        voiceListener.onResult("Test command");
        expect(listenerObj.listener1).toHaveBeenCalled();
        expect(listenerObj.listener2).toHaveBeenCalled();
    });
});