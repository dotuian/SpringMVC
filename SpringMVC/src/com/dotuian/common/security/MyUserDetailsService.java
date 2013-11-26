package com.dotuian.common.security;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dotuian.dao.UserDao;
import com.dotuian.dao.entity.UserEntity;

@Service("MyUserDetailsService")
public class MyUserDetailsService implements UserDetailsService {

    private static final Logger logger = Logger.getLogger(MyUserDetailsService.class);

    private UserDao userDao;

    @Autowired
    public MyUserDetailsService(UserDao userDao) {
        this.userDao = userDao;
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        UserDetails user = null;

        UserEntity entity = userDao.getUserByName(username);
        if (entity != null) {
            user = new User(username, entity.getPassword(), true, true, true,
                    true, this.findUserAuthorities(entity));
        }
        
        // 当成功通过验证时， UserDetails 会被用来建立Authentication 对象，
        // 保存在SecurityContextHolder里
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
