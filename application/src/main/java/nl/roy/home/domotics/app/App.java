package nl.roy.home.domotics.app;

import edu.cmu.sphinx.api.Configuration;
import edu.cmu.sphinx.api.LiveSpeechRecognizer;
import nl.roy.home.domotics.voice.WeatherRecognizer;

import java.io.IOException;

public class App {

    private static final String ACOUSTIC_MODEL =
            "resource:/edu/cmu/sphinx/models/en-us/en-us";
    private static final String DICTIONARY_PATH =
            "resource:/edu/cmu/sphinx/models/en-us/cmudict-en-us.dict";
    private static final String GRAMMAR_PATH =
            "resource:/edu/cmu/sphinx/demo/dialog/";
    private static final String LANGUAGE_MODEL =
            "resource:/edu/cmu/sphinx/demo/dialog/weather.lm";

    public static void main(String[] args) throws IOException {

        Configuration configuration = new Configuration();

        configuration
                .setAcousticModelPath("resource:/cmusphinx-en-us-5.2");
        configuration
                .setDictionaryPath("resource:/edu/cmu/sphinx/models/en-us/cmudict-en-us.dict");
        configuration
                .setLanguageModelPath("resource:/edu/cmu/sphinx/models/en-us/en-us.lm.bin");

        LiveSpeechRecognizer speechRecognizer =
                new LiveSpeechRecognizer(configuration);

        WeatherRecognizer weather = new WeatherRecognizer(speechRecognizer);
    }
}
