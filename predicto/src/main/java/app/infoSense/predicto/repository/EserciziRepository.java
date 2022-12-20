package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Esercizi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EserciziRepository extends JpaRepository<Esercizi,Integer> {

}
