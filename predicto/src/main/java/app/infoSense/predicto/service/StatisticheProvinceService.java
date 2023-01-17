package app.infoSense.predicto.service;

import app.infoSense.predicto.payload.response.*;
import app.infoSense.predicto.repository.StatisticheProvincerepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StatisticheProvinceService {

    @Autowired
    StatisticheProvincerepository statisticheProvincerepository;

    // dati per una provincia, un esercizio e una provenienza
    public List<DatiResponse> getDati(long conts1, long conts2, Optional<Long> eser, Optional<Long> prov){
        List<Tuple> tuple=  statisticheProvincerepository.getDati(conts1,conts2,eser,prov);

        List<DatiResponse> response = tuple.stream().map(r-> new DatiResponse(
                r.get(0, Integer.class),
                r.get(1,Integer.class),
                r.get(2, Integer.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return response;
    }


    // dati per una provincia, un esercizio una provenienza e oltre un anno dato
    public List<DatiResponse> getDatiByYear(int anno, int anno2, Optional<Long>eser, long const1,long const2,Optional<Long> prov){
        List<Tuple> res = statisticheProvincerepository.getDatiByYear(anno,anno2,eser,const1,const2,prov);

        List<DatiResponse> response = res.stream().map(r-> new DatiResponse(
                r.get(0, Integer.class),
                r.get(1,Integer.class),
                r.get(2, Integer.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return response;
    }


    // totali della regione dato un esercizio e dei contesti
    public List<DatiResponseCalcolati> getTotaliRegione(long cons1,long cons2,Optional<Long> eser){
        List<Tuple> tpl = statisticheProvincerepository.getTotaliRegione(cons1,cons2,eser);

        List<DatiResponseCalcolati> list = tpl.stream().map(t-> new DatiResponseCalcolati(
                t.get(0,Integer.class),
                t.get(1,BigDecimal.class),
                t.get(2,String.class)
        )).collect(Collectors.toList());
        return  list;
    }

    // tutti i dati di una provincia
    public List<DatiResponseByProvincia> getDatibyProvincia(Optional<Long> prov){
        List<Tuple> tup = statisticheProvincerepository.getDatiProvincia(prov);

        List<DatiResponseByProvincia> lista = tup.stream().map(tp -> new DatiResponseByProvincia(
                tp.get(0,Integer.class),
                tp.get(1,Integer.class),
                tp.get(2,Integer.class),
                tp.get(3,String.class),
                tp.get(4,String.class),
                tp.get(5,String.class)
        )).collect(Collectors.toList());
        return lista;
    }

    // same data but about two province
    public List<DatiResponseWithProvincia> getDatiByTwoProvince(long conts1, long conts2, Optional<Long> eser, Optional<Long> prov1, Optional<Long> prov2){
        List<Tuple> tpl = statisticheProvincerepository.getDatiTwoProvince(conts1,conts2,eser,prov1,prov2);

        List<DatiResponseWithProvincia> list = tpl.stream().map(r -> new DatiResponseWithProvincia(
                r.get(0,Integer.class),
                r.get(1,BigDecimal.class),
                r.get(2,String.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return list;
    }


// THIS
    public List<DatiResponseWithEsercizio> getDatiForAYear(int anno,long const1, long const2, Optional<Long> prov){
        List<Tuple> res = statisticheProvincerepository.getDatiForAYear(anno,const1,const2,prov);

        List<DatiResponseWithEsercizio> response = res.stream().map(r-> new DatiResponseWithEsercizio(
                r.get(0, Integer.class),
                r.get(1, BigDecimal.class),
                r.get(2, String.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return response;
    }

    public List<String> getYearsByEsercizio(Optional<Long> idEser){
        return statisticheProvincerepository.getYearsByEsercizio(idEser);
    }

    /// TODO metodi di utility per mappare le tuple a DAO

}
