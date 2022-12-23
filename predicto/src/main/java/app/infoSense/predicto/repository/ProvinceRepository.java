package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProvinceRepository  extends JpaRepository<Province, Long> {

  @Query(value = "SELECT p.nome FROM province p", nativeQuery = true)
  List<String> findNomiProvince();


  @Query(value = "SELECT p.id_provincia  FROM province p WHERE p.nome = :nome",nativeQuery = true)
  Optional<Long> findIdProcinciaByNome(String nome);

}
