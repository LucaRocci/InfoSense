package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Builder
public class Province {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProvincia;

    @Column(length = 25)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "id_regione")
    private Regioni idRegione;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Province province = (Province) o;
        return idProvincia == province.idProvincia;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idProvincia);
    }
}
