package nl.roy.home.domotics.services.models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class WeatherModel {

    private double temperature;
    private int precipitationChange;
    private String condition;

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public int getPrecipitationChange() {
        return precipitationChange;
    }

    public void setPrecipitationChange(int precipitationChange) {
        this.precipitationChange = precipitationChange;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }
}
