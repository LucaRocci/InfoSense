package app.infoSense.predicto.service;

import app.infoSense.predicto.entity.Contesto;
import app.infoSense.predicto.repository.ContestoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContestoService {

    @Autowired
    ContestoRepository contestoRepository;

    public Long[] findByNazione(String nazione){
        return contestoRepository.findByNazione(nazione);
    }
   public boolean existsByNazione(String naz){
        return contestoRepository.existsByNazione(naz);
    }


}
