describe("Speaker Spec test", function() {

    var speechSynthesis;
    var speaker;
    beforeEach(function() {
        if ('speechSynthesis' in window) {
            speechSynthesis = window.speechSynthesis;
        }
        speaker = new Speaker(speechSynthesis);
    });

    it("Test if speaker speeks", function() {
        speaker.speak("Hallo wereld");
    });

    it("Test if speaker speaks hello", function() {
        speaker.sayHello();
    });
});