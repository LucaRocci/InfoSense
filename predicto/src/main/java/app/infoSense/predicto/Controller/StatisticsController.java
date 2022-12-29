package app.infoSense.predicto.Controller;

import app.infoSense.predicto.payload.response.DatiResponse;
import app.infoSense.predicto.payload.response.DatiResponseCalcolati;
import app.infoSense.predicto.service.ContestoService;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticheProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/statistics")
//@CrossOrigin
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
    public ResponseEntity<?> getProvince(){
      List<String> lista=  provinceService.findNomiProvince();
      if(lista.isEmpty()){
          return new ResponseEntity<>("Empty List",HttpStatus.BAD_REQUEST);
      }
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
   public ResponseEntity<?> getDatiProvince(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from ){

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


  @GetMapping("/regione/{esercizio}/{provenienza}")
  public ResponseEntity<?> getTotaliRegione(@PathVariable String esercizio, @PathVariable("provenienza") String from){

      Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
      if(idEser.isEmpty()){
          return new ResponseEntity<>("Esercizio inesistente",HttpStatus.NOT_FOUND);
      }
      List<Long> idContesti = contestoService.findbyNazione(from);
      if(idContesti.isEmpty()){
          return new ResponseEntity<>("Provenienza non valida",HttpStatus.NOT_FOUND);
      }
      Object[] arr= idContesti.toArray();
      List<DatiResponseCalcolati>list = statisticheProvinceService.getTotaliRegione((Long)arr[0],(Long)arr[1],idEser);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

}
