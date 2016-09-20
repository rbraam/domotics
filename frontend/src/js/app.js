$( document ).ready(function() {
    var visualChat = new VisualChat(document.getElementById('conversation'));
    var listener = new StartVoiceListener(new webkitSpeechRecognition(),
        new Speaker(window.speechSynthesis, visualChat),
        visualChat);

    listener.start();

//var chat = new VisualChat($('#conversation'));
//chat.speak("Hallo");
//    chat.hear("Yes?")
//chat.speak("Hallo asdfasdfa sdfa sdf as");
//    chat.hear("ok");
//chat.speak("Hallo");
//    chat.hear("allalalalalald afa adf aafd adf  adf  afd  afd a df  afsd  fd")
//chat.speak("Hallo  asdf asdf asdf asdfasdf asdfasdfasdf adf as dsf asdf asdfa df asdf asdf as");


    //$(document.getElementById('conversation')).text("ddddddddddd");
});


