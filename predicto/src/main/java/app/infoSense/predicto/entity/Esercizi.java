package app.infoSense.predicto.entity;


import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Builder
public class Esercizi {

    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEsercizio;
    @Column(length = 25)
    private String nomeEsercizio;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Esercizi esercizi = (Esercizi) o;
        return idEsercizio == esercizi.idEsercizio;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idEsercizio);
    }
}
