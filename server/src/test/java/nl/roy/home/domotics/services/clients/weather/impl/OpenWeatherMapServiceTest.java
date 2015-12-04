package nl.roy.home.domotics.services.clients.weather.impl;

import nl.roy.home.domotics.services.models.WeatherModel;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.when;

public class OpenWeatherMapServiceTest {

    @Mock
    private OpenWeatherMapService service;

    private JSONObject response = new JSONObject(
       "{" +
           "\"coord\": {\n"+
                "\"lon\": 5.39,\n"+
                "\"lat\": 52.15\n"+
           "},\n"+
           "\"weather\": [\n"+
                "{\n"+
                    "\"id\": 804,\n"+
                    "\"main\": \"Clouds\",\n"+
                    "\"description\": \"overcast clouds\",\n"+
                    "\"icon\": \"04n\"\n"+
                "}\n"+
           "],\n"+
           "\"base\": \"cmc stations\",\n"+
           "\"main\": {\n"+
               "\"temp\": 8.34,\n"+
               "\"pressure\": 1028,\n"+
               "\"humidity\": 87,\n"+
               "\"temp_min\": 8,\n"+
               "\"temp_max\": 9\n"+
           "},\n"+
           "\"wind\": {\n"+
               "\"speed\": 6.2,\n"+
               "\"deg\": 210\n"+
           "},\n"+
           "\"clouds\": {\n"+
               "\"all\": 90\n"+
           "},\n"+
            "\"dt\": 1449251700,\n"+
            "\"sys\": {\n"+
                "\"type\": 1,\n"+
                "\"id\": 5207,\n"+
                "\"message\": 0.016,\n"+
                "\"country\": \"NL\",\n"+
                "\"sunrise\": 1449214163,\n"+
                "\"sunset\": 1449242880\n"+
            "},\n"+
            "\"id\": 2759821,\n"+
            "\"name\": \"Amersfoort\",\n"+
            "\"cod\": 200\n"+
        "}");
    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        when(service.getJSON(anyString())).thenReturn(response);
        when(service.getWeather()).thenCallRealMethod();
    }

    @Test
    public void testGetWeather() throws Exception {
        WeatherModel model = service.getWeather();
        assertEquals(8.34, model.getTemperature(), 0.00001);
        assertNull(model.getCondition());
        assertEquals(87, model.getPrecipitationChange());
    }
}