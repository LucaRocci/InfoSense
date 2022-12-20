package app.infoSense.predicto.service;

import app.infoSense.predicto.entity.Province;
import app.infoSense.predicto.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceService {
    @Autowired
    ProvinceRepository provinceRepository;

  /*  public<Optional>findByNome(String nome){
        return provinceRepository.
    }*/

    public List<Province> findAll(){
       return provinceRepository.findAll();
    }

}
