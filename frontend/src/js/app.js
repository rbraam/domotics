var jquery = jQuery.noConflict(true);

jquery(document).ready(function() {
    var listener = new VoiceListener();
    listener.start();
});