package app.infoSense.predicto.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Province {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProvincia;
    @Column(length = 25)
    private String nome;

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
