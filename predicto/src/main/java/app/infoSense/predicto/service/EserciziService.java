package app.infoSense.predicto.service;

import app.infoSense.predicto.entity.Esercizi;
import app.infoSense.predicto.repository.EserciziRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EserciziService {
    @Autowired
    EserciziRepository eserciziRepository;

    public List<Esercizi> findAll(){
        return eserciziRepository.findAll();
    }

    public Optional<Long> findIdByNomeEsercizio(String nome){
        return eserciziRepository.findIdEsercizioByNomeEsercizio(nome);
    }

    public List<String> findNomiEsercizi(){
        return eserciziRepository.findNomiEsercizi();
    }

    public boolean existsbyNomeEsercizio(String eser){
        return eserciziRepository.existsByNomeEsercizio(eser);
    }
}
