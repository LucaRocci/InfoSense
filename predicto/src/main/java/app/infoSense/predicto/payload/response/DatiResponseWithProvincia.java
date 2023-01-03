package app.infoSense.predicto.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class DatiResponseWithProvincia {

    private int anno;
    private int mese;
    private int valore;
    private String arrivoPresenza;
    private String provincia;
}
