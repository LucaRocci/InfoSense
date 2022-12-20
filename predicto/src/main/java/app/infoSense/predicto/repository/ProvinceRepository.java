package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository  extends JpaRepository<Province, Integer> {

  //  public<Optional> findByNome(String nome);
}
