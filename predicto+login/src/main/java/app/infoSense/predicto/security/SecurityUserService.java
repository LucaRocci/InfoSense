package app.infoSense.predicto.security;


import app.infoSense.predicto.entity.User;
import app.infoSense.predicto.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class SecurityUserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    public SecurityUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with email:" + email));
        return new org.springframework.security.core.userdetails.User(user.getEmail(),
                user.getPassword(),mapRolesToAuthorities());
    }
    //  not used but we have to use it if we want to use the return type User in the overridded method
    public Collection<? extends GrantedAuthority>  mapRolesToAuthorities(){
        return List.of(() -> "true");
    }

}