package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.StatisticheProvince;
import app.infoSense.predicto.payload.response.DatiResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Tuple;
import java.util.List;
import java.util.Optional;

@Repository
public interface StatisticheProvincerepository extends JpaRepository<StatisticheProvince,Long> {

    @Query(value = "SELECT sp.anno, sp.mese , sp.valore , c.arrivo_presenza FROM statistiche_province sp " +
            ",contesto c WHERE (sp.id_contesto = :cont1 OR sp.id_contesto= :cont2)" +
            " AND sp.id_esercizio= :eser AND sp.id_provincia= :prov AND c.id_contesto= sp.id_contesto;",nativeQuery = true)
    List<Tuple> getDati(@Param("cont1")long contst1 , @Param("cont2") long contst2, @Param("eser") Optional<Long> esrc, @Param("prov") Optional<Long> prov );


    @Query(value = "SELECT  sp.anno, SUM(sp.valore) AS totali, c.arrivo_presenza FROM statistiche_province sp, contesto c WHERE " +
            "(sp.id_contesto= :const1 OR sp.id_contesto= :const2 ) AND sp.id_esercizio= :eser AND " +
            "c.id_contesto=sp.id_contesto GROUP BY sp.anno,sp.id_contesto;",nativeQuery = true)
    List<Tuple> getTotaliRegione(@Param("const1") long const1,@Param("const2") long const2, @Param("eser") Optional<Long> eser);

}
