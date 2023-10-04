package com.TwoPiece.AnimeRandomizer.User.Service;

import com.TwoPiece.AnimeRandomizer.User.Error.NotFoundUserException;
import com.TwoPiece.AnimeRandomizer.User.Models.Login;
import com.TwoPiece.AnimeRandomizer.User.Repository.UserRepository;
import com.TwoPiece.AnimeRandomizer.User.Models.SiteUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<SiteUser> getUserById(Long U_id) {
        return userRepository.findSiteUserById(U_id);
    }
    public Optional<SiteUser> getUserByEmail(String email) {
        return userRepository.findSiteUserByEmail(email);
    }

    public SiteUser login(Login login) {
        SiteUser userByEmail = userRepository.findSiteUserByEmail(login.getEmail()).orElseThrow(NotFoundUserException::new);
        if (userByEmail.getPassword().equals(login.getPassword())) {
            return userByEmail;
        } else {
            throw new IllegalStateException("Email or Password is incorrect");
        }
    }

    public void addUser(SiteUser user) {
        boolean userByEmail = userRepository.findSiteUserByEmail(user.getEmail()).isPresent();
        boolean userById = userRepository.findSiteUserById(user.getU_id()).isPresent();
        if (userByEmail) {
            throw new IllegalStateException("Email is already taken");
        }
        if (userById) {
            throw new IllegalStateException("Id is already taken");
        }
        userRepository.save(user);
    }

    public void saveUser(SiteUser user) {
        userRepository.save(user);
    }

    public void deleteUser(String email) {
        userRepository.deleteSiteUserByEmail(email);
    }

//    public String registerUser(SiteUser user) {
//        // Save the user to the database or your preferred user repository
//        userRepository.save(user);
//        return "redirect:/login";
//    }
}
