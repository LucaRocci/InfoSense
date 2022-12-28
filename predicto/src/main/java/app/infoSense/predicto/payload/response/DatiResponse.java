package app.infoSense.predicto.payload.response;

import app.infoSense.predicto.entity.Contesto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter  @AllArgsConstructor  @NoArgsConstructor
public class DatiResponse {

    private int anno;
    private int mese;
    private int valore;
    // arrivo - presenza
    private String arrivoPresenza;
}
