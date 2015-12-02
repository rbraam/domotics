package nl.roy.home.domotics.voice;

import edu.cmu.sphinx.api.LiveSpeechRecognizer;

public class WeatherRecognizer {

    public WeatherRecognizer(LiveSpeechRecognizer recognizer){
        recognizer.startRecognition(true);
        while (true) {
            String utterance = recognizer.getResult().getHypothesis();
            if (utterance.equals("the end"))
                break;
            else
                System.out.println(utterance);
        }
    }
}
