package app.infoSense.predicto.service;

import app.infoSense.predicto.payload.response.DatiResponse;
import app.infoSense.predicto.payload.response.DatiResponseCalcolati;
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
}
