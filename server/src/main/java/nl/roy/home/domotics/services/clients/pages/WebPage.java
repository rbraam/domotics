package nl.roy.home.domotics.services.clients.pages;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;

public class WebPage {
    private String url;
    public WebPage (String url){
        this.url = url;
    }

    public Document loadDocument() throws IOException {
        Document doc = Jsoup.connect(this.url)
                .userAgent("Mozilla/5.0")
                .timeout(5000).get();
        return doc;
    }
}
