package app.infoSense.predicto.controller;

import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

@RestController
@RequestMapping("/predictions")
public class PredictionsController {
 // TODO validzione


    @Autowired
    ProvinceService provinceService;

    @Autowired
    EserciziService eserciziService;


    @GetMapping("/{province}/{structure}/{provenance}/{start}/{end}")
    public ResponseEntity<?> getCountries(@PathVariable String province, @PathVariable String structure, @PathVariable String provenance, @PathVariable int start, @PathVariable int end ){
        // TODO validazione e cambio end point
        String url = "http://127.0.0.1:5050/";
        url+=province;
        url+="/"+structure;
        url+="/"+provenance;
        url+="/"+start+"/"+end;
        RestTemplate restTemplate= new RestTemplate();
        Object[] countries = restTemplate.getForObject(url, Object[].class);



        return new ResponseEntity<>((Arrays.asList(countries)), HttpStatus.OK);


          /*RestTemplate restTemplate = new RestTemplate();
        String respone = restTemplate.getForObject(url,String.class);*/
        //return new ResponseEntity<String>(respone,HttpStatus.OK);
    }


}
