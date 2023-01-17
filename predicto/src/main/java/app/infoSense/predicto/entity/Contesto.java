package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Builder
public class Contesto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idContesto;

    @Column(length = 10)
    private String arrivoPresenza;

    @Column(length = 15)
    private String nazione;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Contesto contesto = (Contesto) o;
        return Objects.equals(idContesto, contesto.idContesto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idContesto);
    }
}
