package app.infoSense.predicto.controller;

import app.infoSense.predicto.payload.response.*;
import app.infoSense.predicto.service.ContestoService;
import app.infoSense.predicto.service.EserciziService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticheProvinceService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/statistics")
@Validated
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
    @GetMapping("/structures")
    public ResponseEntity<?> getEsercizi(){
        List<String> list = eserciziService.findNomiEsercizi();
        if(list.isEmpty()){
            return new ResponseEntity<String>("Empty list",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @Operation(description = "send data that correspond at a given region, a structure and a provenance")
  @GetMapping("/{province}/{structure}/{provenance}")
   public ResponseEntity<?> getDatiProvince(@PathVariable @NotBlank @Size(min = 3,max = 20) String province, @PathVariable @NotBlank @Size(min = 3,max = 25) String structure, @PathVariable("provenance") @NotBlank @Size(min = 4,max = 15) String from ){

        boolean c = provinceService.existsByNome(province);
        boolean b = eserciziService.existsbyNomeEsercizio(structure);
        boolean p = contestoService.existsByNazione(from);

        if(!c || !b || !p){
            return new ResponseEntity<>("Incorrect data",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(province);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(structure);
        Long[] arr = contestoService.findByNazione(from);

        List<DatiResponse>list=statisticheProvinceService.getDati(arr[0],arr[1],idEser,idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);
  }

    @Operation(description = "send data that correspond at a given region, a structure and a provenance in a declared range of years")
  @GetMapping("/{province}/{structure}/{provenance}/{startYear}/{endYear}")
  public ResponseEntity<?> getDatiFromAyear(@PathVariable @NotBlank @Size(min = 3,max = 20) String province , @PathVariable @NotBlank @Size(min = 3,max = 25) String structure, @PathVariable("provenance") @NotBlank @Size(min = 4,max = 15) String from, @PathVariable  @NotNull @Min(2000) @Max(2025) int startYear, @PathVariable @NotNull int endYear){

      boolean c = provinceService.existsByNome(province);
      boolean b = eserciziService.existsbyNomeEsercizio(structure);
      boolean p = contestoService.existsByNazione(from);

      if(!c || !b || !p){
          return new ResponseEntity<>("Incorrect data",HttpStatus.BAD_REQUEST);
      }
      Optional<Long> idProv = provinceService.findIdByNome(province);
      Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(structure);
      Long[] arr = contestoService.findByNazione(from);

      List<DatiResponse>list= statisticheProvinceService.getDatiByYear(startYear,endYear,idEser,arr[0],arr[1],idProv);
      return new ResponseEntity<>(list,HttpStatus.OK);

  }

    @Operation(description = "API that send data by a given structure and a provenance about two province in order to compare it")
  @GetMapping("compare/{prov1}/{prov2}/{structure}/{provenance}")
    public ResponseEntity<?> getDataWithTwoProvince(@PathVariable @NotBlank @Size(min = 3,max = 20) String prov1,@PathVariable @NotBlank @Size(min = 3,max = 20) String prov2, @PathVariable @NotBlank @Size(min = 3,max = 25) String structure, @PathVariable("provenance") @NotBlank @Size(min = 4,max = 15) String from ){

        boolean c = provinceService.existsByNome(prov1);
        boolean p2 = provinceService.existsByNome(prov2);
        boolean b = eserciziService.existsbyNomeEsercizio(structure);
        boolean p = contestoService.existsByNazione(from);

        if(!c || !b || !p || !p2){
            return new ResponseEntity<>("Incorrect data",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(prov1);
        Optional<Long> idProv2 = provinceService.findIdByNome(prov2);
        Optional<Long> idEser = eserciziService.findIdByNomeEsercizio(structure);
        Long[] arr = contestoService.findByNazione(from);
        List<DatiResponseWithProvincia>list=statisticheProvinceService.getDatiByTwoProvince(arr[0],arr[1], idEser,idProv, idProv2);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

     @Operation(description = "An api that send data about value in all structure in a specific year")
    @GetMapping("/year/{province}/{provenance}/{year}")
    public ResponseEntity<?> getDataByAyear(@PathVariable @NotBlank @Size(min = 3,max = 20) String province, @PathVariable("provenance") @NotBlank @Size(min = 4,max = 15) String from, @PathVariable @NotNull @Min(2000) @Max(2025) int year){

        boolean c = provinceService.existsByNome(province);
        boolean p = contestoService.existsByNazione(from);

        if(!c || !p ){
            return new ResponseEntity<>("Incorrect data",HttpStatus.BAD_REQUEST);
        }
        Optional<Long> idProv = provinceService.findIdByNome(province);
        Long[] arr = contestoService.findByNazione(from);

        List<DatiResponseWithEsercizio>list= statisticheProvinceService.getDatiForAYear(year,arr[0],arr[1],idProv);
        return new ResponseEntity<>(list,HttpStatus.OK);

    }

    @Operation(description = "An API that return all the year by a given structure ")
    @GetMapping("/year/{structure}")
    public ResponseEntity<?> getYearsByEsercizio(@PathVariable @NotBlank @Size(min=3, max=25) String structure){
      boolean ex = eserciziService.existsbyNomeEsercizio(structure);
      if(!ex){
          return new ResponseEntity<String>("Dati non corretti",HttpStatus.BAD_REQUEST);
      }
       Optional<Long> idEser  = eserciziService.findIdByNomeEsercizio(structure);
       List<String> listAnni = statisticheProvinceService.getYearsByEsercizio(idEser);
       return new ResponseEntity<>(listAnni,HttpStatus.OK);
    }
}
