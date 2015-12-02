package nl.roy.home.domotics.services.weather;

import nl.roy.home.domotics.exceptions.UnknownException;

public interface WeatherService {
    /**
     * Should return the temperature of today
     * @return Temperature
     * @throws UnknownException when the temp can't be found.
     */
    double getTemperature() throws UnknownException;

    /**
     * Should return the condition of today
     * @return the condition of today as String
     * @throws UnknownException when the temp can't be found
     */
    String getCondition() throws UnknownException;

    /**
     * Should return the Precipitation change in %
     * @return the Precipitation change in % (0 - 100)
     * @throws UnknownException when the temp can't be found
     */
    double getPrecipitationChange() throws UnknownException;
}
