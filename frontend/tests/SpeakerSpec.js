describe("Speaker Spec test", function() {

    var speechSynthesis;
    var speaker;
    beforeEach(function() {
        if ('speechSynthesis' in window) {
            speechSynthesis = window.speechSynthesis;
        }
        speaker = new Speaker(speechSynthesis);
    });

    it("Test if speaker speaks goodmorning when sayHello is called in the morning", function() {
        spyOn(speaker, 'speak');

        var fakeDate = function() {
            var date = new Date();
            date.setHours(0,0,0,1);
            return date;
        };
        // and.callFake
        spyOn(Date, 'now').and.callFake(fakeDate);

        speaker.sayHello();
        expect(speaker.speak).toHaveBeenCalledWith("Goedemorgen");

        fakeDate = function() {
            var date = new Date();
            date.setHours(11,59,59,99);
            return date;
        };
        speaker.sayHello();
        expect(speaker.speak).toHaveBeenCalledWith("Goedemorgen");
    });

    it("Test if speaker speaks Good afternoon when sayHello is called in the afternoon", function() {
        spyOn(speaker, 'speak');

        var fakeDate = function() {
            var date = new Date();
            date.setHours(12,0,0,0);
            return date;
        };
        // and.callFake
        spyOn(Date, 'now').and.callFake(fakeDate);

        speaker.sayHello();
        expect(speaker.speak).toHaveBeenCalledWith("Goedemiddag");

        fakeDate = function() {
            var date = new Date();
            date.setHours(17,59,59,99);
            return date;
        };
        speaker.sayHello();
        expect(speaker.speak).toHaveBeenCalledWith("Goedemiddag");
    });

    it("Test if speaker speaks Good evening when sayHello is called in the evening", function() {
        spyOn(speaker, 'speak');

        var fakeDate = function() {
            var date = new Date();
            date.setHours(18,0,0,0);
            return date;
        };
        // and.callFake
        spyOn(Date, 'now').and.callFake(fakeDate);

        speaker.sayHello();
        expect(speaker.speak).toHaveBeenCalledWith("Goedeavond");

        fakeDate = function() {
            var date = new Date();
            date.setHours(23,59,59,99);
            return date;
        };
        speaker.sayHello();
        expect(speaker.speak).toHaveBeenCalledWith("Goedeavond");
    });
});