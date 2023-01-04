package app.infoSense.predicto.Controller;

import app.infoSense.predicto.payload.response.DatiResponse;
import app.infoSense.predicto.payload.response.DatiResponseByProvincia;
import app.infoSense.predicto.payload.response.DatiResponseCalcolati;
import app.infoSense.predicto.payload.response.DatiResponseWithProvincia;
import app.infoSense.predicto.service.ContestoService;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticheProvinceService;
import io.swagger.v3.oas.annotations.Operation;
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

    @Operation(description = "API that return a list of province")
    @GetMapping("/province")
    public ResponseEntity<?> getProvince(){
      List<String> lista=  provinceService.findNomiProvince();
      if(lista.isEmpty()){
          return new ResponseEntity<>("Empty List",HttpStatus.BAD_REQUEST);
      }
      return new ResponseEntity<List<String>>(lista, HttpStatus.OK);
    }

    @Operation(description = "API that return a list of structure")
    @GetMapping("/esercizi")
    public ResponseEntity<?> getEsercizi(){
        List<String> list = eserciziService.findNomiEsercizi();
        if(list.isEmpty()){
            return new ResponseEntity<String>("Empty list",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @Operation(description = "send data that correspond at a given region, a structure and a provenance")
  @GetMapping("/{provincia}/{esercizio}/{provenienza}")
   public ResponseEntity<?> getDatiProvince(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from ){

        boolean c = provinceService.existsByNome(provincia);
        boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean p = contestoService.existsByNazione(from);

        if(!c || !b || !p){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(provincia);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
        Long[] arr = contestoService.findByNazione(from);

        List<DatiResponse>list=statisticheProvinceService.getDati(arr[0],arr[1],idEser,idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

    @Operation(description = "send data that correspond at a given region, a structure and a provenance by a start year declared")
  @GetMapping("/{provincia}/{esercizio}/{provenienza}/{year}")
  public ResponseEntity<?> getDatiFromAyear(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from, @PathVariable int year){

      boolean c = provinceService.existsByNome(provincia);
      boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
      boolean p = contestoService.existsByNazione(from);

      if(!c || !b || !p){
          return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
      }
      Optional<Long> idProv = provinceService.findIdByNome(provincia);
      Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
      Long[] arr = contestoService.findByNazione(from);

      List<DatiResponse>list= statisticheProvinceService.getDatiByYear(year,idEser,arr[0],arr[1],idProv);
      return new ResponseEntity<>(list,HttpStatus.OK);

  }

 // an example of an API about  calculated value of the region
  @GetMapping("/regione/{esercizio}/{provenienza}")
  public ResponseEntity<?> getTotaliRegione(@PathVariable String esercizio, @PathVariable("provenienza") String from){

        boolean es = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean pr = contestoService.existsByNazione(from);

        if(!es || !pr){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
      Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
      Long[] arr = contestoService.findByNazione(from);
      List<DatiResponseCalcolati>list = statisticheProvinceService.getTotaliRegione(arr[0],arr[1],idEser);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

    @Operation(description = "All the Data about the given province")
  @GetMapping("/allData/{provincia}")
    public ResponseEntity<?> getDatiByProv(@PathVariable String provincia){
        boolean prv = provinceService.existsByNome(provincia);
        if(!prv){
            return new ResponseEntity<>("dati non corretti ", HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(provincia);
        List<DatiResponseByProvincia> list = statisticheProvinceService.getDatibyProvincia(idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

    @Operation(description = "API that send data by a given structure and a provenance about two province in order to compare it")
  @GetMapping("compare/{prov1}/{prov2}/{esercizio}/{provenienza}")
    public ResponseEntity<?> getDatiwithTwoProvince(@PathVariable String prov1,@PathVariable String prov2, @PathVariable String esercizio, @PathVariable("provenienza") String from ){

        boolean c = provinceService.existsByNome(prov1);
        boolean p2 = provinceService.existsByNome(prov2);
        boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean p = contestoService.existsByNazione(from);

        if(!c || !b || !p || !p2){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(prov1);
        Optional<Long> idProv2 = provinceService.findIdByNome(prov2);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
        Long[] arr = contestoService.findByNazione(from);
        List<DatiResponseWithProvincia>list=statisticheProvinceService.getDatiByTwoProvince(arr[0],arr[1], idEser,idProv, idProv2);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

@Operation(description = " the most specific request: send data about a province in a structure in a specific year")
    @GetMapping("/year/{provincia}/{esercizio}/{provenienza}/{year}")
    public ResponseEntity<?> getDatiByAyear(@PathVariable String provincia, @PathVariable String esercizio, @PathVariable("provenienza") String from, @PathVariable int year){

        boolean c = provinceService.existsByNome(provincia);
        boolean b = eserciziService.existsbyNomeEsercizio(esercizio);
        boolean p = contestoService.existsByNazione(from);

        if(!c || !b || !p){
            return new ResponseEntity<>("dati non corretti",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(provincia);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(esercizio);
        Long[] arr = contestoService.findByNazione(from);

        List<DatiResponse>list= statisticheProvinceService.getDatiForAYear(year,idEser,arr[0],arr[1],idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);

    }


}
