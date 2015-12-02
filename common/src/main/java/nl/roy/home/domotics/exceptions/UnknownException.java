package nl.roy.home.domotics.exceptions;


public class UnknownException extends RuntimeException{

    public UnknownException(String message){
        super(message);
    }

    public UnknownException(String message, Exception cause){
        super(message, cause);
    }

}
