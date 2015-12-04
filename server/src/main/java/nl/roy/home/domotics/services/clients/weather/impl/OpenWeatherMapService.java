package nl.roy.home.domotics.services.clients.weather.impl;

import nl.roy.home.domotics.services.clients.weather.WeatherService;
import nl.roy.home.domotics.services.models.WeatherModel;
import org.json.JSONObject;

public class OpenWeatherMapService extends JSONService implements WeatherService{

    private String apiKey = "e504418b73d02f28a1a0f4f922065f4a";
    private String openWeatherMapEndpoint = "http://api.openweathermap.org/data/2.5/weather?";

    public WeatherModel getWeather(){
        StringBuffer sb = new StringBuffer();
        sb.append (openWeatherMapEndpoint);
        sb.append("q=Amersfoort");
        sb.append("&units=metric");
        sb.append("&APPID=");
        sb.append(apiKey);
        return translate(getJSON(sb.toString()));
    }


    private WeatherModel translate(JSONObject json){
        WeatherModel model = new WeatherModel();
        JSONObject main = json.getJSONObject("main");
        model.setTemperature(main.getDouble("temp"));
        model.setPrecipitationChange(main.getInt("humidity"));
        return model;
    }
}
