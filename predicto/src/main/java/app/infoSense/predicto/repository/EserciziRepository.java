package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Esercizi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EserciziRepository extends JpaRepository<Esercizi,Long> {

    @Query(value = "SELECT e.id_esercizio  FROM esercizi e WHERE e.nome_esercizio = :nomeEs" ,nativeQuery = true)
    Optional<Long> findIdEsercizioByNomeEsercizio(String nomeEs);

    @Query(value = "SELECT e.nome_esercizio FROM esercizi e",nativeQuery = true)
    List<String> findNomiEsercizi();
}
