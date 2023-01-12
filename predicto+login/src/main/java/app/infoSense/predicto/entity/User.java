package app.infoSense.predicto.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;


@Entity
@Data  // aka --> same lombok annotation  in one
@AllArgsConstructor

@NoArgsConstructor
@Table(name="users", uniqueConstraints = {
        @UniqueConstraint(columnNames = { "email"})
})

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String cognome;
    @NotBlank
    private String email;

    @Column(length = 400)
    @NotBlank
    private String password;
    private boolean abilitato;

}
