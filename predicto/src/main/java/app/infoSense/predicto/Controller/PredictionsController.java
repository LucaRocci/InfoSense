package app.infoSense.predicto.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/predictions")
public class PredictionsController {

    @GetMapping("/")
    public ResponseEntity<?> getCountries(){
        // TODO validazione e cambio end point
        String url = "http://127.0.0.1:5050/";
        /*RestTemplate restTemplate= new RestTemplate();
        Object[] countries = restTemplate.getForObject(url, Object[].class);*/

        RestTemplate restTemplate = new RestTemplate();
        String respone = restTemplate.getForObject(url,String.class);

        //return new ResponseEntity<>((Arrays.asList(countries)), HttpStatus.OK);
        return new ResponseEntity<String>(respone,HttpStatus.OK);
    }


}
