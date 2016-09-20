function Message (text, bodyClass){
    this.htmlElement = null;
    this.createHtmlElement(text, bodyClass);
};

Message.prototype.getHtmlElement = function(){
    return this.htmlElement;
};

Message.prototype.createHtmlElement = function(text, bodyClass){
    this.htmlElement = $('<div></div>');
    this.htmlElement.addClass("message");
    this.messageBody = $('<div>'+ text +'</div>');
    this.messageBody.addClass('messageBody');
    this.messageBody.addClass(bodyClass);
    this.htmlElement.append(this.messageBody);
};

Message.prototype.setText = function (text){
    this.messageBody.text(text);
}


