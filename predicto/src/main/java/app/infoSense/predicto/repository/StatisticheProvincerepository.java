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

    // dati 1 provincia, 2 contesti , e 1 esercizio
    @Query(value = "SELECT sp.anno, sp.mese , sp.valore , c.arrivo_presenza FROM statistiche_province sp " +
            ",contesto c WHERE (sp.id_contesto = :cont1 OR sp.id_contesto= :cont2)" +
            " AND sp.id_esercizio= :eser AND sp.id_provincia= :prov AND c.id_contesto= sp.id_contesto;",nativeQuery = true)
    List<Tuple> getDati(@Param("cont1")long contst1 , @Param("cont2") long contst2, @Param("eser") Optional<Long> esrc, @Param("prov") Optional<Long> prov );

    // dati 1 provincia 2 contesti 1 esercizio e 1 anno
    @Query(value = "SELECT sp.anno, sp.mese, sp.valore, c.arrivo_presenza " +
            "FROM statistiche_province sp, province p, contesto c " +
            "WHERE sp.id_contesto = c.id_contesto AND p.id_provincia = sp.id_provincia AND sp.anno >= :anno AND sp.anno <= :anno2 " +
            "AND sp.id_esercizio= :eser AND sp.id_contesto IN (:const1,:const2) AND sp.id_provincia= :prov" ,nativeQuery = true)
    List<Tuple> getDatiByYear(@Param("anno") int anno, @Param("anno2") int anno2 ,@Param("eser") Optional<Long>eser,@Param("const1") long const1, @Param("const2") long const2,@Param("prov")Optional<Long> prov);

    // date 2 province 1 esercizio e i contesti
    @Query(value = "SELECT sp.anno, SUM(sp.valore) as 'valore', c.arrivo_presenza, p.nome\n" +
            "FROM statistiche_province sp, province p, contesto c \n" +
            "WHERE sp.id_contesto = c.id_contesto\n" +
            "AND p.id_provincia = sp.id_provincia\n" +
            "AND sp.id_contesto IN (:const1, :const2)\n" +
            "AND sp.id_provincia IN (:pr1, :pr2)\n" +
            "AND sp.id_esercizio = :eser\n" +
            "GROUP BY sp.anno, p.nome, c.id_contesto",nativeQuery = true)
    List<Tuple> getDatiTwoProvince(@Param("const1")long contst1 , @Param("const2") long contst2, @Param("eser") Optional<Long> esrc, @Param("pr1") Optional<Long> prov,@Param("pr2") Optional<Long> prov2);


    @Query(value = "SELECT sp.anno,SUM(sp.valore) as 'valore', c.arrivo_presenza, e.nome_esercizio  " +
            "FROM statistiche_province sp, province p, contesto c, esercizi e " +
            "WHERE sp.id_contesto = c.id_contesto " +
            "AND p.id_provincia = sp.id_provincia " +
            "AND sp.id_esercizio = e.id_esercizio  " +
            "AND sp.anno = :anno " +
            "AND sp.id_contesto IN (:const1, :const2) " +
            "AND sp.id_provincia = :prov " +
            "GROUP BY e.id_esercizio, sp.id_contesto" ,nativeQuery = true)
    List<Tuple> getDatiForAYear(@Param("anno") int anno,@Param("const1") long const1, @Param("const2") long const2,@Param("prov")Optional<Long> prov);



    // list of year for a given structure
    @Query(value= "SELECT sp.anno " +
            "FROM statistiche_province sp, esercizi e " +
            "WHERE sp.id_esercizio = e.id_esercizio  " +
            "AND sp.id_esercizio= :es " +
            "GROUP BY sp.anno", nativeQuery = true)
    List<String> getYearsByEsercizio(@Param("es") Optional<Long> idEser);
}