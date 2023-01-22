package app.infoSense.predicto.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class PredictionsRequest {

    private String Territorio;
    private String Indicatori;
    private String Esercizio;
    private String Paese;

    @Override
    public String toString() {
        return "PredictionsRequest{" +
                "Territorio='" + Territorio + '\'' +
                ", Indicatori='" + Indicatori + '\'' +
                ", Esercizio='" + Esercizio + '\'' +
                ", Paese='" + Paese + '\'' +
                ", steps=" + steps +
                '}';
    }

    private int steps;

}
