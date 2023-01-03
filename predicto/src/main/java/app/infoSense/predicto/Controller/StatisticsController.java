package app.infoSense.predicto.Controller;

import app.infoSense.predicto.payload.response.DatiResponse;
import app.infoSense.predicto.payload.response.DatiResponseByProvincia;
import app.infoSense.predicto.payload.response.DatiResponseCalcolati;
import app.infoSense.predicto.payload.response.DatiResponseWithProvincia;
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
import java.util.ResourceBundle;

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

    // API that return a list of province
    @GetMapping("/province")
    public ResponseEntity<?> getProvince(){
      List<String> lista=  provinceService.findNomiProvince();
      if(lista.isEmpty()){
          return new ResponseEntity<>("Empty List",HttpStatus.BAD_REQUEST);
      }
      return new ResponseEntity<List<String>>(lista, HttpStatus.OK);
    }

    // API that return a list of structure
    @GetMapping("/esercizi")
    public ResponseEntity<?> getEsercizi(){
        List<String> list = eserciziService.findNomiEsercizi();
        if(list.isEmpty()){
            return new ResponseEntity<String>("Empty list",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    // send data by a given region , a structure and a provenance
  @GetMapping("/{provincia}/{esercizio}/{provenienza}")
   public ResponseEntity<?> getDatiProvince(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from ){

        boolean c = provinceService.existsByNome(provincia);
        boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean p = contestoService.existsByNazione(from);

        if(c == false || b == false || p == false){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(provincia);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
        List<Long> idContesti = contestoService.findbyNazione(from);
        Object[] arr= idContesti.toArray();
        List<DatiResponse>list=statisticheProvinceService.getDati((Long)arr[0],(Long)arr[1],idEser,idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

  // get API with the filter of the start year
  @GetMapping("/{provincia}/{esercizio}/{provenienza}/{year}")
  public ResponseEntity<?> getDatiFromAyear(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from, @PathVariable int year){

      boolean c = provinceService.existsByNome(provincia);
      boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
      boolean p = contestoService.existsByNazione(from);

      if(c == false || b == false || p == false){
          return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
      }
      Optional<Long> idProv = provinceService.findIdByNome(provincia);
      Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
      List<Long> idContesti = contestoService.findbyNazione(from);
      Object[] arr= idContesti.toArray();
      List<DatiResponse>list= statisticheProvinceService.getDatiByYear(year,idEser,(long)arr[0],(long)arr[1],idProv);
      return new ResponseEntity<>(list,HttpStatus.OK);

  }

 // an example of an API about  calculated value of the region
  @GetMapping("/regione/{esercizio}/{provenienza}")
  public ResponseEntity<?> getTotaliRegione(@PathVariable String esercizio, @PathVariable("provenienza") String from){

        boolean es = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean pr = contestoService.existsByNazione(from);

        if(es == false || pr == false){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
      Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
      List<Long> idContesti = contestoService.findbyNazione(from);
      Object[] arr= idContesti.toArray();
      List<DatiResponseCalcolati>list = statisticheProvinceService.getTotaliRegione((Long)arr[0],(Long)arr[1],idEser);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

  // All the Data about the province
  @GetMapping("/allData/{provincia}")
    public ResponseEntity<?> getDatiByProv(@PathVariable String provincia){
        boolean prv = provinceService.existsByNome(provincia);
        if(prv == false){
            return new ResponseEntity<>("dati non corretti ", HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(provincia);
        List<DatiResponseByProvincia> list = statisticheProvinceService.getDatibyProvincia(idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

  // Same API but with 2 province
  @GetMapping("compare/{prov1}/{prov2}/{esercizio}/{provenienza}")
    public ResponseEntity<?> getDatiwithTwoProvince(@PathVariable String prov1,@PathVariable String prov2, @PathVariable String esercizio, @PathVariable("provenienza") String from ){

        boolean c = provinceService.existsByNome(prov1);
        boolean p2 = provinceService.existsByNome(prov2);
        boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean p = contestoService.existsByNazione(from);

        if(c == false || b == false || p == false || p2 == false){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(prov1);
        Optional<Long> idProv2 = provinceService.findIdByNome(prov2);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
        List<Long> idContesti = contestoService.findbyNazione(from);
        Object[] arr= idContesti.toArray();
        List<DatiResponseWithProvincia>list=statisticheProvinceService.getDatiByTwoProvince((long)arr[0],(long)arr[1], idEser,idProv, idProv2);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

}
