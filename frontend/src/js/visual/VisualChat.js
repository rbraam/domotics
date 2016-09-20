function VisualChat (container){
    this.container = container;
};

VisualChat.prototype.speak = function (text){
    var speakMessage = this.createChatElement(text, 'speakClass');
    $(this.container).prepend(speakMessage.getHtmlElement());
    return speakMessage;
};

VisualChat.prototype.hear = function (text){
    var hearMessage = this.createChatElement(text, 'hearClass');
    $(this.container).prepend(hearMessage.getHtmlElement());
    return hearMessage;
};

VisualChat.prototype.createChatElement = function (text, bodyClass){
    return new Message(text, bodyClass);
};