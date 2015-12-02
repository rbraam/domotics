package nl.roy.home.domotics.services.pages;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;

public class WebPage {
    private String url;
    public WebPage (String url){
        this.url = url;
    }

    public Document loadDocument() throws IOException {
        Document doc = Jsoup.connect(this.url).get();
        return doc;
    }
}
