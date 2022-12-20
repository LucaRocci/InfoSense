package app.infoSense.predicto.service;

import app.infoSense.predicto.entity.Esercizi;
import app.infoSense.predicto.repository.EserciziRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EserciziService {
    @Autowired
    EserciziRepository eserciziRepository;

    public List<Esercizi> findAll(){
        return eserciziRepository.findAll();
    }
}
