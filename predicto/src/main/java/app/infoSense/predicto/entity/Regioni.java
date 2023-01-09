package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter
public class Regioni {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRegione;

    @Column(length = 15)
    private String nomeRegione;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Regioni regioni = (Regioni) o;
        return idRegione.equals(regioni.idRegione);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRegione);
    }


}
