package app.infoSense.predicto.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class Esercizi {

    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEsercizio;
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
