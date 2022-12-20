package app.infoSense.predicto.Controller;

import app.infoSense.predicto.entity.Esercizi;
import app.infoSense.predicto.entity.Province;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    ProvinceService provinceService;
    @Autowired
    EserciziService eserciziService;

    @GetMapping("/province")
    public ResponseEntity<List<Province>> getProvince(){
      List<Province> lista=  provinceService.findAll();
      return new ResponseEntity<List<Province>>(lista, HttpStatus.OK);
    }

    @GetMapping("/esercizi")
    public ResponseEntity<?> getEsercizi(){
        List<Esercizi> list = eserciziService.findAll();
        if(list.isEmpty()){
            return new ResponseEntity<String>("Empty list",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<List<Esercizi>>(list,HttpStatus.OK);
    }

    /*@GetMapping("/contesti")
    public ResponseEntity<?> getcontesti(){

    }*/
}
