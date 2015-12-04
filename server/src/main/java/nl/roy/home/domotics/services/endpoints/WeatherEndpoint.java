package nl.roy.home.domotics.services.endpoints;

import com.fasterxml.jackson.databind.ObjectMapper;
import nl.roy.home.domotics.exceptions.UnknownException;
import nl.roy.home.domotics.services.clients.weather.WeatherService;
import nl.roy.home.domotics.services.clients.weather.impl.OpenWeatherMapService;
import nl.roy.home.domotics.services.endpoints.responses.UnknownResponse;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/weather")
public class WeatherEndpoint {

    private static ObjectMapper objectMapper;

    private WeatherService weatherService = new OpenWeatherMapService();

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTemperature(){
        try{
            return Response.ok(weatherService.getWeather()).build();
        }catch(UnknownException ue){
            return Response.ok(new UnknownResponse(ue)).build();
        }
    }


}
