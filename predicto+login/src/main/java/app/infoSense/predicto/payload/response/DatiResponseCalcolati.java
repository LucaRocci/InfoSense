package app.infoSense.predicto.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class DatiResponseCalcolati {

    private int anno;
    private BigDecimal valore;
    // arrivo - presenza
    private String arrivoPresenza;

}
