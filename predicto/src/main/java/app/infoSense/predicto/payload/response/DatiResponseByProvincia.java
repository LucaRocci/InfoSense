package app.infoSense.predicto.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class DatiResponseByProvincia extends DatiResponse {
    private int anno;
    private int mese;
    private int valore;
    private String arrivoPresenza;
    private String esercizio;
    private String nazione;
}

