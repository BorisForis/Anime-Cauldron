package com.TwoPiece.AnimeRandomizer.User.Repository;

import com.TwoPiece.AnimeRandomizer.User.Models.SiteUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<SiteUser, String> {
    @Query("SELECT s FROM SiteUser s WHERE s.U_id = ?1")
    Optional<SiteUser> findSiteUserById(Long U_id);

    @Query("SELECT s FROM SiteUser s WHERE s.email = ?1")
    Optional<SiteUser> findSiteUserByEmail(String email);

    @Modifying
    @Transactional
    @Query("DELETE FROM SiteUser s WHERE s.email = ?1")
    void deleteSiteUserByEmail(String email);
}
