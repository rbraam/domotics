package nl.roy.home.domotics.services.endpoints.responses;

import nl.roy.home.domotics.exceptions.UnknownException;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UnknownResponse {
    private String error;

    public UnknownResponse (UnknownException ex){
        this.error = ex.getMessage();
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
