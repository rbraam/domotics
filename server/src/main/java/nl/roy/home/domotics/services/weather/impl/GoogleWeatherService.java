package nl.roy.home.domotics.services.weather.impl;


import nl.roy.home.domotics.exceptions.UnknownException;
import nl.roy.home.domotics.services.pages.WebPage;
import nl.roy.home.domotics.services.weather.WeatherService;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;

public class GoogleWeatherService implements WeatherService {
    private static final String TEMP_CSS_SELECTOR = "#wob_tm";
    private static final String CONDITION_CSS_SELECTOR = "#wob_dc";
    private static final String PP_CSS_SELECTOR = "#wob_pp";
    private final WebPage page;

    public GoogleWeatherService(WebPage googleSearch){
        page = googleSearch;
    }

    public double getTemperature() {
        Elements conditionElement = getElement(TEMP_CSS_SELECTOR);
        return Double.parseDouble(conditionElement.text());
    }

    public String getCondition() {
        Elements conditionElement = getElement(CONDITION_CSS_SELECTOR);
        return conditionElement.text();
    }

    public double getPrecipitationChange(){
        Elements ppElement = getElement(PP_CSS_SELECTOR);
        String innerText = ppElement.text();
        innerText = innerText.replace("%","");
        return Double.parseDouble(innerText);
    }

    private Elements getElement(String cssSelector){
        try {
            Document doc = page.loadDocument();
            Elements element = doc.select(cssSelector);
            if (element == null || element.isEmpty()){
                throw new UnknownException("Element " + cssSelector + " condition not found");
            }
            return element;
        } catch (IOException ioe){
            throw new UnknownException("Load document failed", ioe);
        }
    }

}
