package app.infoSense.predicto.Controller;

import app.infoSense.predicto.entity.Esercizi;
import app.infoSense.predicto.entity.Province;
import app.infoSense.predicto.payload.response.DatiResponse;
import app.infoSense.predicto.service.ContestoService;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticheProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    ProvinceService provinceService;
    @Autowired
    EserciziService eserciziService;
    @Autowired
    ContestoService contestoService;
    @Autowired
    StatisticheProvinceService statisticheProvinceService;

    @GetMapping("/province")
    public ResponseEntity<List<String>> getProvince(){
      List<String> lista=  provinceService.findNomiProvince();
      return new ResponseEntity<List<String>>(lista, HttpStatus.OK);
    }

    @GetMapping("/esercizi")
    public ResponseEntity<?> getEsercizi(){
        List<String> list = eserciziService.findNomiEsercizi();
        if(list.isEmpty()){
            return new ResponseEntity<String>("Empty list",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    // li mandi indietro tutti i dati che corrispondono
  @GetMapping("/{provincia}/{esercizio}/{provenienza}")
   public ResponseEntity<?> getAnni(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from ){

        Optional<Long> idProv = provinceService.findIdByNome(provincia);
        if(idProv.isEmpty()){
            return new ResponseEntity<>("Provincia inesistente",HttpStatus.NOT_FOUND);
        }
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
        if(idEser.isEmpty()){
            return new ResponseEntity<>("Esercizio inesistente",HttpStatus.NOT_FOUND);
        }
        List<Long> idContesti = contestoService.findbyNazione(from);
        if(idContesti.isEmpty()){
            return new ResponseEntity<>("Provenienza non valida",HttpStatus.NOT_FOUND);
        }
        Object[] arr= idContesti.toArray();
        List<DatiResponse>list=statisticheProvinceService.getDati((Long)arr[0],(Long)arr[1],idEser,idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);

  }




    // API DI PROVA
/*    @GetMapping("get/{prov}")
    public ResponseEntity<String> prova(@PathVariable String prov){
         Optional<Long> entita = eserciziService.findIdByNomeEsercizio(prov);
         if(!entita.isEmpty()){
             return  new ResponseEntity<String>("L'id corrispondente è "+entita,HttpStatus.OK);
         }
         else {
             return new ResponseEntity<String>("L'id corrispondente non esiste ", HttpStatus.OK);
         }
    }

    @GetMapping("get2/{nation}")
    public ResponseEntity<?> prova2(@PathVariable String nation){

        List<Long> corrispondenze = contestoService.findbyNazione(nation);
        if(!corrispondenze.isEmpty()){
            return new ResponseEntity<List<Long>>(corrispondenze,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<String>("L'id corrispondente non esiste ", HttpStatus.OK);
        }
    }*/

}
