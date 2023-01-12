package app.infoSense.predicto.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;


@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class LoginRequest {

    @Email
    private String email;

    private String password;

    // this class provide the necessary parameter of a login request by the client

}
