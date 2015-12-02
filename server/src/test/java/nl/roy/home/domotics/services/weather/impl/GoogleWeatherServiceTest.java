package nl.roy.home.domotics.services.weather.impl;

import nl.roy.home.domotics.services.pages.WebPage;
import nl.roy.home.domotics.services.weather.WeatherService;
import org.jsoup.Jsoup;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class GoogleWeatherServiceTest {

    private WeatherService service;
    private WebPage googleSearch;

    @Before
    public void setup(){
        googleSearch = mock(WebPage.class);
        service = new GoogleWeatherService(googleSearch);
    }

    @Test
    public void getTemperatureTest() throws IOException {
        when(googleSearch.loadDocument())
                .thenReturn(Jsoup.parse("<div id='wob_tm'>10</div>"));

        assertEquals( 10.0, service.getTemperature(), 0.0001);
    }

    @Test
    public void getConditionTest() throws IOException {
        when(googleSearch.loadDocument())
                .thenReturn(Jsoup.parse("<div id='wob_dc'>Rain</div>"));

        assertEquals("Rain", service.getCondition());
    }

    @Test
    public void getPPTest() throws IOException {
        when(googleSearch.loadDocument())
                .thenReturn(Jsoup.parse("<div id='wob_pp'>50%</div>"));

        assertEquals(50.0, service.getPrecipitationChange(), 0.0001);
    }

}