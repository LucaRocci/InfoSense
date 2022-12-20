package app.infoSense.predicto.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.Month;
import java.time.Year;
import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class StatisticheProvince {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_provincia")
    private Province idProvinicia;

    @ManyToOne
    @JoinColumn(name= "id_contesto")
    private Contesto idContesto;

    @ManyToOne
    @JoinColumn(name = "id_esercizio")
    private Esercizi idEsercizio;

    private Year anno;

    private Month mese;

    private int valore;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StatisticheProvince that = (StatisticheProvince) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

