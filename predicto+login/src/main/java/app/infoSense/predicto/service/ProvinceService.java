package app.infoSense.predicto.service;

import app.infoSense.predicto.entity.Province;
import app.infoSense.predicto.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProvinceService {
    @Autowired
    ProvinceRepository provinceRepository;

    public List<String> findNomiProvince(){ return provinceRepository.findNomiProvince();}

    public Optional<Long> findIdByNome(String nome){
        return provinceRepository.findIdProcinciaByNome(nome);
    }

    public List<Province> findAll(){
       return provinceRepository.findAll();
    }

    public boolean existsByNome(String nome){
        return provinceRepository.existsByNome(nome);
    }
}
