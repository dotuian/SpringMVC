package com.dotuian.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dotuian.dao.UserDao;
import com.dotuian.dao.entity.UserEntity;
import com.dotuian.service.LoginService;

@Repository
@Service("loginServiceImpl")
@Transactional
public class LoginServiceImpl implements LoginService, UserDetailsService {

//    @Autowired
    private UserDao userDao;

    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        UserDetails user = null;

        UserEntity entity = userDao.getUserByName(username);
        
//        UserEntity entity = new UserEntity();
//        entity.setUsername("username");
//        entity.setPassword("password");
        
        if (entity != null) {
            user = new User(username, entity.getPassword(), true, true, true,
                    true, this.findUserAuthorities(entity));
        }

        return user;
    }

    /**
     * 获取用户的权限
     * 
     * @param user
     * @return
     */
    public Collection<GrantedAuthority> findUserAuthorities(UserEntity entity) {
        List<GrantedAuthority> autthorities = new ArrayList<GrantedAuthority>();
        String roles = entity.getRoles();

        autthorities.add(new GrantedAuthorityImpl(roles));

        return autthorities;
    }

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
    

}
