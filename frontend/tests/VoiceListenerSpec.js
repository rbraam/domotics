describe("VoiceListener Spec test", function() {

    var recognition;

    beforeEach(function() {
        recognition = jasmine.createSpyObj('recognition', ['start', 'stop']);
    });

    it("Added listeners are called correctly", function() {
        var voiceListener = new VoiceListener(recognition);
        var listenerObj = jasmine.createSpyObj('listenerObj', ['listener1']);

        voiceListener.addListener("Test text",listenerObj.listener1);

        voiceListener.onResult("Test text");
        expect(listenerObj.listener1).toHaveBeenCalled();
    });
});