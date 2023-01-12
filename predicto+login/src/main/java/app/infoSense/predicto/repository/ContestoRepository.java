package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Contesto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContestoRepository extends JpaRepository<Contesto,Long> {

     @Query(value ="SELECT c.id_contesto  FROM contesto c WHERE c.nazione = :naz ", nativeQuery = true)
     Long[] findByNazione(String naz);

     boolean existsByNazione(String naz);
}
