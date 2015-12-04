package nl.roy.home.domotics.services.clients.weather.impl;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import org.json.JSONObject;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriBuilder;

public class JSONService {

    private Client client = Client.create(new DefaultClientConfig());

    public JSONObject getJSON(String url){
        WebResource service = client.resource(UriBuilder.fromUri(url).build());
        String response = service.accept(MediaType.APPLICATION_JSON).get(String.class);
        JSONObject json = new JSONObject(response);
        return json;
    }
}
