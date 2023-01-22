package app.infoSense.predicto.controller;

import app.infoSense.predicto.payload.request.PredictionsRequest;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StructureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;

@RestController
@RequestMapping("/predictions")
@Validated
public class PredictionsController {
 // TODO validzione


    @Autowired
    ProvinceService provinceService;

    @Autowired
    StructureService structureService;


    @PostMapping("/")
    public ResponseEntity<?> getPredictions(@RequestBody @Valid PredictionsRequest request){

        String url = "http://127.0.0.1:5000/predict";
        RestTemplate restTemplate= new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        HttpEntity<PredictionsRequest> entity = new HttpEntity<>(request,headers);


        System.out.println(request.toString());

       // Object[] countries = restTemplate.postForObject(url,entity,Object[].class);

       // return new ResponseEntity<>((Arrays.asList(countries)), HttpStatus.OK);
        return new ResponseEntity<>("CIao", HttpStatus.OK);

    }


}
