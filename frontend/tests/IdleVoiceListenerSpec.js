describe("IdleVoiceListener Spec test", function() {

    var recognition;
    var idleVoiceListener;
    var speaker;
    beforeEach(function() {
        recognition = jasmine.createSpyObj('recognition', ['start', 'stop']);
        speaker = jasmine.createSpyObj('speaker', ['sayHello']);
        idleVoiceListener = new StartVoiceListener(recognition,speaker);
    });

    it("Added listeners are called correctly", function() {
        idleVoiceListener.onResult("hallo truus");
        expect(speaker.sayHello).toHaveBeenCalled();
    });
});